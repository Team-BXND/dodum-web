import { useState } from "react";
import Editor from "./Editor";
import styled from "styled-components";
import { SubTitleStyle, TitleStyle } from "../Text/TextStyled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => props.theme.bgPrimary};
    padding: 40px 60px 12px 60px;
    margin-top: 24px;
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.shadowLight};
`

const Title = styled.input`
    width: 100%;
    &::placeholder {
        color: ${(props) => props.theme.textSecondary};
    }
    &:focus {
        outline: none;
    }
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.textSecondary};
    padding: 8px 0px;
    ${TitleStyle};
`

const SubTitle = styled(Title)`
    ${SubTitleStyle};
`

function AddPost() {
    const [value, setValue] = useState('');
    console.log(value);
    return (
        <Container>
            <Title placeholder="제목을 입력하세요." id="titleInput"/>
            <SubTitle placeholder="부제목을 입력하세요." id="subTitleInput"/>
            <Editor value={value} setValue={setValue}/>
        </Container>
    )
};

export default AddPost;