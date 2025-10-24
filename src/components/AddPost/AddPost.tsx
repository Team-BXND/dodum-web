import { useRef, useState } from "react";
import * as S from "./AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Buttons/Button";
import { useLocation } from "react-router-dom";

interface IButtonsProps {
    submit: (() => void);
}

const Buttons = ({submit} : IButtonsProps) => {
    const location = useLocation();
    return (
        <S.ButtonContainer>
            <Button text="게시" onClick={submit}/>
            <Button text="취소" onClick={() => {}} isGray/>
        </S.ButtonContainer>
    )
}

interface IAddPostProps {
    handleSubmit: ((titleRef: React.RefObject<HTMLInputElement | null>, subTitleRef: React.RefObject<HTMLInputElement | null>, value: string) => void);
}

function AddPost({handleSubmit}: IAddPostProps) {
    const [value, setValue] = useState('');
    const titleRef = useRef<HTMLInputElement>(null);
    const subTitleRef = useRef<HTMLInputElement>(null);

    return (
        <S.Container>
            <S.Title placeholder="제목을 입력하세요." ref={titleRef}/>
            <S.SubTitle placeholder="부제목을 입력하세요." ref={subTitleRef}/>
            <Editor value={value} setValue={setValue}/>
            <Buttons submit={() => {handleSubmit(titleRef, subTitleRef, value)}}/>
        </S.Container>
    )
}


export default AddPost;