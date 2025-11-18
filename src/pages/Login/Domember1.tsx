import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts";
import { useNavigate } from "react-router-dom";
const Domember1 = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/domember2");
  };
  return (
    <S.Background>
      <S.Card $height="20.8rem">
        <S.TitleCover>
          <S.Dodum src="src/assets/image.png" alt="Dodum Logo" />
          <S.Title>환영합니다!</S.Title>
          <S.welcomeMessage>회원가입하고 대소고 생활 시작하기</S.welcomeMessage>
        </S.TitleCover>
        <S.Button
          style={{ position: "relative", bottom: "1.5rem" }}
          onClick={onClick}
        >
          시작하기
        </S.Button>
      </S.Card>
    </S.Background>
  );
};

export default Domember1;
