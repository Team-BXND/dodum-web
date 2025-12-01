import ReactQuill from 'react-quill';
import 'react-quill-new/dist/quill.snow.css'
import { QuillStyle, QuillWrapper } from "./Editor.style";
import { useRef, useState } from "react";
import axios from "axios";

interface IProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    thumbnail: React.Dispatch<React.SetStateAction<string | null>>;
}

function Editor({value, setValue, thumbnail}:IProps) {
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        const input = document.createElement('input'); //가상의 input을 만들어 이미지를 업로드하도록 유도
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.addEventListener("change", async () => {
            const file = input.files?.[0]; //업로드한 이미지 파일
            const [imageUrl, setImageUrl] = useState("")
            try {
                //TODO: 이미지 업로드 API 전송 형식 확인 필요
                axios.post(`${import.meta.env.VITE_SERVER_URL}/files/upload`, {
                    params: {
                        file: file
                    }
                })
                .then((response) => {
                    setImageUrl(response.data);
                })
                .catch((error) => {
                    alert(error.response);
                })

                thumbnail(imageUrl);

                const editor = quillRef.current?.getEditor(); //에디터 가져오기
                const range = editor?.getSelection(); //현재 커서 위치
                editor?.insertEmbed(range?.index || 0, "image", imageUrl); //이미지 삽입
            }
            catch(error) {
                alert(error);
            }
        })
    }

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