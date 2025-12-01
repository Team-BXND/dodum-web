import * as S from "@/pages/Login/Login.style.ts";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/member1");
  };
  return (
    <S.ButtonCover>
        <S.Button onClick={onClick}>시작하기</S.Button>
        </S.ButtonCover>
  );
};

export default Start;
