import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'
import { QuillStyle, QuillWrapper } from "./Editor.style";
// import './editor.css'

interface IProps {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
}

function Editor({value, setValue}:IProps) {

    const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
    ],
    };

    return (
        <QuillWrapper>
            <QuillStyle/>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} placeholder="본문을 입력하세요."/>
        </QuillWrapper>
    )
};

export default Editor;