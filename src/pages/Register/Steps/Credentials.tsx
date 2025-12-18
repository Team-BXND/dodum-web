import { useNavigate } from "react-router-dom";
import ButtonLong from "../../../components/Buttons/ButtonLong.tsx";
import * as S from "../Steps.style.ts"
import * as Text from "@/components/Text/Text.tsx"
import { useFormContext } from "react-hook-form";
import type { RegisterType } from "@/pages/Register/Register.tsx";

function RegisterStep() {
  const navigate = useNavigate();
  const {watch, register, trigger, formState: {errors}} = useFormContext<RegisterType>();

  const handleNext = async () => {
    const isValid = await trigger(["id", "password", "passwordConfirm"])

    if(isValid) {
      navigate('/register/student-info')
    }
  }

  return (
    <S.Container>
      <Text.Title>회원가입</Text.Title>
      <S.FormContainer>
        <S.InputConatiner>
          <Text.Caption>아이디</Text.Caption>
          <S.Input {...register("id", {
            required: "아이디를 입력하세요",
          })} />
          <S.Error>{errors.id?.message ?? null}</S.Error>
        </S.InputConatiner>
        <S.InputConatiner>
          <Text.Caption>비밀번호</Text.Caption>
          <S.Input type="password" {...register("password", {
            required: "비밀번호를 입력하세요.",
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
              message: "영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요."
            }
          })} />
          <S.Error>{errors.password?.message ?? null}</S.Error>
        </S.InputConatiner>
        <S.InputConatiner>
          <Text.Caption>비밀번호 확인</Text.Caption>
          <S.Input type="password" {...register("passwordConfirm", {
            required: "비밀번호를 다시 입력하세요.",
            validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다."
          })} />
          <S.Error>{errors.passwordConfirm?.message ?? null}</S.Error>
        </S.InputConatiner>
      </S.FormContainer>
      <ButtonLong text="다음으로" onClick={handleNext} />
    </S.Container>
  )
}

export default RegisterStep;