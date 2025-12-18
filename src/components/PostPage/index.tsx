import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";

import Caption from "../Text/Caption";
import SubTitle from "../Text/SubTitle";
import Title from "../Text/Title";
import * as S from "./style";

export interface IPostPageProps {
    title: string,
    subtitle: string,
    createdAt: string,
    body: string,
}

function PostPage(props: IPostPageProps) {
    const location = useLocation();
    const navigator = useNavigate();
    
    const postId = location.pathname.split("/")[3]; 
    
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = () => {
        navigator(`/archive/edit/${postId}`);
    }

    const handleDelete = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            axios.post(`url/delete/${postId}`, {
                postId: postId
            })
            .then((response) => {
                alert(response.data);
                navigator(-1);
            })
            .catch((error) => {
                console.error(error);
                alert(error.response?.status);
            });
        }
    }

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
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
                        {isOpen && (
                            <S.Options>
                                <S.Option onClick={handleEdit}>수정</S.Option>
                                <S.Option onClick={handleDelete}>삭제</S.Option>
                            </S.Options>
                        )}
                    </S.Info>
                </S.InfoContainer>
                
                <S.Body>
                    <Markdown>{props.body}</Markdown>
                </S.Body>
            </S.TitleContainer>
        </S.Container>
    )
}

export default PostPage;