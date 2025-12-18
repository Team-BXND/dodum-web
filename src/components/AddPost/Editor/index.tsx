import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { QuillStyle, QuillWrapper } from "./style";
import { useRef, useState } from "react";
import axios from "axios";
import {privateInstance} from "@/api/axiosInstance.ts";

interface IProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    thumbnail: React.Dispatch<React.SetStateAction<string | null>>;
}

function Editor({value, setValue, thumbnail}:IProps) {
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => { // addEventListener 대신 onchange 사용 (간결함)
            const file = input.files?.[0];
            if (!file) return;

            // 1. FormData 객체 생성
            const formData = new FormData();
            formData.append("file", file); // 백엔드에서 받는 key 이름 확인 필요 ('file' or 'image')

            try {
                // 2. 이미지 업로드 요청
                const res = await privateInstance.post(`${import.meta.env.VITE_SERVER_URL}/files/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });

                // 3. 서버에서 받은 이미지 URL (서버 응답 구조에 따라 res.data.url 등일 수 있음)
                const imageUrl = res.data.url;

                // 4. 썸네일 상태 업데이트
                thumbnail(imageUrl);

                // 5. 에디터에 이미지 삽입
                const editor = quillRef.current?.getEditor();
                const range = editor?.getSelection();

                // 커서 위치가 없으면 맨 끝에 삽입
                editor?.insertEmbed(range?.index ?? 0, "image", imageUrl);

                // 이미지 삽입 후 커서를 이미지 뒤로 이동 (선택 사항)
                editor?.setSelection((range?.index ?? 0) + 1);

            } catch (error) {
                console.error("이미지 업로드 실패:", error);
                alert("이미지 업로드에 실패했습니다.");
            }
        };
    };

    const modules = {
    toolbar: {
        container: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
        ],
        handlers: {
            image: imageHandler
        }
    },
    };

    return (
        <QuillWrapper>
            <QuillStyle/>
            <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} modules={modules} placeholder="본문을 입력하세요."/>
        </QuillWrapper>
    )
};

export default Editor;