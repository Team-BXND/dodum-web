import Body from "../Text/Body";
import Caption from "../Text/Caption";
import SubTitle from "../Text/SubTitle";
import Title from "../Text/Title";
import * as S from "./PostPage.style";

function PostPage() {
    return (
        <S.Container>
            <S.TitleContainer>
                <Title>도담도담</Title>
                <S.InfoContainer>
                    <SubTitle color="secondary">스마트 스쿨로 학교의 새로운 패러다임을 만듭니다.</SubTitle>
                    <Caption color="secondary">2025-01-01</Caption>
                </S.InfoContainer>
                <S.Body>
                    <Body>도담도담은 외출/외박 신청, 심야 자습 신청, 급식 확인, 기숙사 아침 기상송 확인, 학교와 기숙사 상벌점 조회, 퇴사 버스 신청, 학교 일정 조회 기능을 제공합니다.<br/>2019년 개발을 시작해 2020년 출시한 도담도담은 바인드의 ....</Body>
                    <S.Image src="https://b1nd.com/static/media/Homepaeg.608d8df778e327482a37.png"/>
                </S.Body>
            </S.TitleContainer>
        </S.Container>
    )
}

export default PostPage;