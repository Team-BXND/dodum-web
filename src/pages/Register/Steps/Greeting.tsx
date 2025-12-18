import { useNavigate } from "react-router-dom";
import ButtonLong from "../../../components/Buttons/ButtonLong.tsx";
import * as S from "../Steps.style.ts"
import * as Text from "@/components/Text/Text.tsx"

function RegisterStep() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TitleContainer>
        <Text.Title>입학을 축하합니다!</Text.Title>
        <Text.Body color="#ADADAD">회원가입하고 대소고 생활 시작하기</Text.Body>
      </S.TitleContainer>
      <ButtonLong text="시작하기" onClick={() => navigate('/register/credentials')} />
    </S.Container>
  )
}

export default RegisterStep;