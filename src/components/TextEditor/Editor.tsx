import ReactQuill, { Quill } from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css'
// import './editor.css'
import styled, { createGlobalStyle } from "styled-components";

interface IPropsInterface {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const QuillStyle = createGlobalStyle`
    .quill > .ql-container > .ql-editor.ql-blank::before {
        color: ${(props) => props.theme.textSecondary};
        font-size: 24px;
    }

    .ql-snow .ql-picker-label, .ql-picker-options .ql-picker-item {
        color: ${(props) => props.theme.textSecondary};
        &:hover {
            color: ${(props) => props.theme.mainColor} !important;
        }
    }

    .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow a, .ql-picker-label.ql-active::before {
        color: ${(props) => props.theme.mainColor} !important;
    }

    .ql-snow.ql-toolbar .ql-picker-item.ql-selected {

    }

    .ql-toolbar.ql-snow .ql-fill {
        fill: ${({ theme }) => theme.textSecondary} !important;
    }

    .ql-snow.ql-toolbar button.ql-active .ql-fill {
        fill: ${({ theme }) => theme.mainColor} !important;
    }

    .ql-snow.ql-toolbar button.ql-active .ql-stroke {
        stroke: ${({ theme }) => theme.mainColor} !important;
    }

    .ql-toolbar.ql-snow .ql-stroke {
        stroke: ${({ theme }) => theme.textSecondary} !important;
    }

    .ql-toolbar.ql-snow {
        border: 0;
    }

    .ql-container.ql-snow {
        border: 0;
    }

    .quill {
        min-height: 100%;
    }

    .ql-editor.ql-blank::before {
        font-style: normal;
        font-size: 16px;
    }

    .ql-snow .ql-editor h1 {
        font-size: 44px;
    }

    .ql-snow .ql-editor h2 {
        font-size: 28px;
    }

    .ql-snow .ql-editor p {
        font-size: 24px;
    }

    .ql-snow .ql-editor * strong {
        font-weight: bold;
    }

    .ql-snow .ql-editor * em {
        font-style: italic;
    }
`;

const QuillWrapper = styled.div`
    width: 100%;
    min-height: 400px;

    .ql-editor {
        min-height: 300px;
    }
`

function Editor({value, setValue}:IPropsInterface) {

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