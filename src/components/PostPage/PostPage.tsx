import Body from "../Text/Body";
import Caption from "../Text/Caption";
import SubTitle from "../Text/SubTitle";
import Title from "../Text/Title";
import * as S from "./PostPage.style";

export interface IPostPageProps {
    title: string,
    subtitle: string,
    createdAt: string,
    body: string,
}

function PostPage(props: IPostPageProps) {
    return (
        <S.Container>
            <S.TitleContainer>
                <Title>{props.title}</Title>
                <S.InfoContainer>
                    <SubTitle color="secondary">{props.subtitle}</SubTitle>
                    <Caption color="secondary">{props.createdAt}</Caption>
                </S.InfoContainer>
                <S.Body>
                    <Body>{props.body}
                    </Body>
                </S.Body>
            </S.TitleContainer>
        </S.Container>
    )
}

export default PostPage;