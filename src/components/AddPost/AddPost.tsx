import { useRef, useState } from "react";
import * as S from "./AddPost.style"
import Editor from "@/components/AddPost/Editor";
import Button from "@/components/Buttons/Button";

interface IButtonsProps {
    submit: (() => void);
}

const Buttons = ({submit} : IButtonsProps) => {
    return (
        <S.ButtonContainer>
            <Button text="게시" onClick={submit}/>
            <Button text="취소" onClick={() => {}} isGray/>
        </S.ButtonContainer>
    )
}

interface IAddPostProps {
    handleSubmit: ((titleRef: React.RefObject<HTMLInputElement | null>, subTitleRef: React.RefObject<HTMLInputElement | null>, categoryRef: React.RefObject<HTMLSelectElement | null>, value: string) => void);
}

function AddPost({handleSubmit}: IAddPostProps) {
    const [value, setValue] = useState('');
    const titleRef = useRef<HTMLInputElement>(null);
    const subTitleRef = useRef<HTMLInputElement>(null);
    const CategoryRef = useRef<HTMLSelectElement>(null);

    return (
        <S.Container>
            <S.Title placeholder="제목을 입력하세요." ref={titleRef}/>
            <S.SubTitle placeholder="부제목을 입력하세요." ref={subTitleRef}/>
            <S.Category ref={CategoryRef} defaultValue="default">
                <option disabled hidden value="default">카테고리를 선택하세요.</option>
                <option value="동아리">동아리</option>
                <option value="나르샤">나르샤</option>
                <option value="대회 수상작">대회 수상작</option>
                <option value="미니 프로젝트">미니 프로젝트</option>
            </S.Category>
            <Editor value={value} setValue={setValue}/>
            <Buttons submit={() => {handleSubmit(titleRef, subTitleRef, CategoryRef, value)}}/>
        </S.Container>
    )
}


export default AddPost;