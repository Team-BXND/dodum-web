import { useNavigate } from "react-router-dom";
import ButtonLong from "../../../components/Buttons/ButtonLong.tsx";
import * as S from "../Steps.style.ts"
import * as Text from "@/components/Text/Text.tsx"
import { useFormContext } from "react-hook-form";
import type { RegisterType } from "@/pages/Register/Register.tsx";
import * as StudentId from "@/constants/studentId.constants.ts"
import { publicInstance } from "@/api/axiosInstance.ts";

function RegisterStep() {
  const navigate = useNavigate();
  const {watch, register, trigger, formState: {errors}} = useFormContext<RegisterType>();

  const handleNext = async () => {
    const isValid = await trigger(["name", "email", "grade", "class", "studentNumber", "phone"])

    if(isValid) {
      publicInstance.post(`/auth/email/send`, {
        email: watch("email"),
      })
      .then(() => {
        alert("인증메일이 전송되었습니다.")
      })
      .catch(() => {
        alert("인증메일 전송에 실패했습니다.")
        return;
      })
      navigate('/register/email-verify')
    }
  }

  return (
    <S.Container>
      <Text.Title>회원가입</Text.Title>
      <S.FormContainer>
        <S.InputConatiner>
          <Text.Caption>이름</Text.Caption>
          <S.Input {...register("name", { required: "이름을 입력하세요" })} />
          <S.Error>{errors.name?.message ?? null}</S.Error>
        </S.InputConatiner>
        <S.InputConatiner>
          <Text.Caption>이메일</Text.Caption>
          <S.Input {...register("email", {
            required: "이메일을 입력하세요", 
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식이 올바르지 않습니다."
          }})} />
          <S.Error>{errors.email?.message ?? null}</S.Error>
        </S.InputConatiner>
        <S.InputConatiner>
          <Text.Caption>학번</Text.Caption>
          <S.RowContainer>
            <S.RowSelect {...register("grade", {required: true})}>
              {StudentId.studentGrade.map((elem) => {
                return <option value={elem.value}>{elem.value}</option>
              })}
            </S.RowSelect>
            <S.RowSelect {...register("class", {required: true})}>
              {StudentId.studentClass.map((elem) => {
                return <option value={elem.value}>{elem.value}</option>
              })}
            </S.RowSelect>
            <S.RowSelect {...register("studentNumber", {required: true})}>
              {StudentId.studentId.map((elem) => {
                return <option value={elem.value}>{elem.value}</option>
              })}
            </S.RowSelect>
          </S.RowContainer>
        </S.InputConatiner>
        <S.InputConatiner>
          <Text.Caption>전화번호</Text.Caption>
          <S.Input {...register("phone", {
            required: "전화번호를 입력하세요.",
            minLength: 10,
          })} />
          <S.Error>{errors.phone?.message ?? null}</S.Error>
        </S.InputConatiner>
      </S.FormContainer>
      <ButtonLong type="submit" text="회원가입" onClick={handleNext} />
    </S.Container>
  )
}

export default RegisterStep;