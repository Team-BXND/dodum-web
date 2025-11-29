import DOMPurify from "dompurify";
import Caption from "../Text/Caption";
import SubTitle from "../Text/SubTitle";
import Title from "../Text/Title";
import * as S from "./PostPage.style";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export interface IPostPageProps {
    title: string,
    subtitle: string,
    createdAt: string,
    body: string,
}

function PostPage(props: IPostPageProps) {
    const sanitizedContent = DOMPurify.sanitize(props.body);
    const path = useLocation();
    const postId = path.pathname.split("/")[3];
    const navigator = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = () => {
        navigator(`/archive/edit/${postId}`)
    }

    const handleDelete = () => {
        axios.post("dd", {
            postId: postId
        })
        .then((response) => {
            alert(response)
        })
        .catch((error) => {
            alert(error.response.status)
        })
    }

    const handleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <S.Container>
            <S.TitleContainer>
                <Title>{props.title}</Title>
                <S.InfoContainer>
                    <SubTitle color="secondary">{props.subtitle}</SubTitle>
                    <S.Info>
                        <Caption color="secondary">{props.createdAt}</Caption>
                        <S.OptionButton onClick={handleOpen}>:</S.OptionButton>
                        {isOpen ? <S.Options>
                            <S.Option onClick={handleEdit}>수정</S.Option>
                            <S.Option onClick={handleDelete}>삭제</S.Option>
                        </S.Options> : null}
                    </S.Info>
                </S.InfoContainer>
                <S.Body>
                    <div dangerouslySetInnerHTML={{__html: sanitizedContent}} />
                </S.Body>
            </S.TitleContainer>
        </S.Container>
    )
}

export default PostPage;