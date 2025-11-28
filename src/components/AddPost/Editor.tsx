import ReactQuill from 'react-quill';
import 'react-quill-new/dist/quill.snow.css'
import { QuillStyle, QuillWrapper } from "./Editor.style";
import { useRef } from "react";

interface IProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({value, setValue}:IProps) {
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        const input = document.createElement('input'); //가상의 input을 만들어 이미지를 업로드하도록 유도
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.addEventListener("change", async () => {
            const file = input.files?.[0]; //업로드한 이미지 파일
            try {
                const name = Date.now(); //업로드 할 이미지의 이름을 현재 시각으로
                //TODO: image upload func

                //placeholderImage
                const imageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpvRRub-ODLG5AAHLD4g1Hyx1X1RAbvUPuBpdM1whwQqdOOQiZzfSvuDtGrRgADTc-HMNwlumHxyAG4GFg7IKcs25oU0D2Qm9lWmwBpz0";

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
            image: imageHandler //이미지 업로드 시 imageHandler 사용
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