import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'
import { QuillStyle, QuillWrapper } from "./Editor.style";
import { useRef } from "react";
// import './editor.css'

interface IProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({value, setValue}:IProps) {
    const quillRef = useRef<ReactQuill>(null);

    const imageHandler = () => {
        console.log("imagehanlder")
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.addEventListener("change", async () => {
            const file = input.files?.[0];
            try {

                console.log("in");
                const name = Date.now();
                //image upload func
                const upload = () => {

                };

                //placeholderImage
                const imageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpvRRub-ODLG5AAHLD4g1Hyx1X1RAbvUPuBpdM1whwQqdOOQiZzfSvuDtGrRgADTc-HMNwlumHxyAG4GFg7IKcs25oU0D2Qm9lWmwBpz0";

                const editor = quillRef.current?.getEditor();

                const range = editor?.getSelection();
                editor?.insertEmbed(range?.index || 0, "image", imageUrl);
            }
            catch(error) {
                console.log(error);
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