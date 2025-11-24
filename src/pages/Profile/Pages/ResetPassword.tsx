import * as S from "../styles/ProfileDetail.style"
import Caption from "@/components/Text/Caption"
import axios from "axios"
import { useEffect } from "react"
import Button from "@/components/Buttons/Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type PasswordForm = {
  // username: string,
  password: string,
  newPassword: string,
  newPasswordConfirm: string,
}

function ResetPassword() {
  const navigator = useNavigate();

  const submit: SubmitHandler<PasswordForm> = (data) => {
    axios.post("")
  }

  const {
    watch,
    setError,
    clearErrors,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordForm>()

  useEffect(() => {
    console.log("watching")
    if (watch('newPassword') !== watch('newPasswordConfirm') && watch('newPasswordConfirm')) {
      setError('newPasswordConfirm', {type: "custom", "message": "비밀번호가 일치하지 않습니다."})
    } else {
      clearErrors('newPasswordConfirm');
    }
  }, [watch('newPasswordConfirm')])

  return (
    <S.Container onSubmit={handleSubmit(submit)}>
      <S.Title>세부정보</S.Title>
      <S.ProfileContainer>
        <S.InfoContainer>
          <S.Info>
            <S.Row>
              <Caption>{"기존 비밀번호"}</Caption>
              <S.Input placeholder="기존 비밀번호를 입력하세요." {...register("password", {required: true})} />
              {errors.password && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"새 비밀번호"}</Caption>
              <S.Input placeholder="새 비밀번호를 입력하세요." {...register("newPassword", {required: true})} />
              {errors.newPassword && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"새 비밀번호 확인"}</Caption>
              <S.Input placeholder="새 비밀번호를 다시 입력하세요." {...register("newPasswordConfirm", {required: true})} />
              {errors.newPasswordConfirm?.type === "required" && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
              {errors.newPasswordConfirm?.type === "custom" && <S.ErrorMsg>{errors.newPasswordConfirm?.message}</S.ErrorMsg>}
            </S.Row>
          </S.Info>
        </S.InfoContainer>
      </S.ProfileContainer>
      <S.Buttons>
        <Button text="수정 완료" type="submit" />
        <Button text="취소" isGray onClick={() => navigator("/profile/detail")} />
      </S.Buttons>
    </S.Container>
  )
}

export default ResetPassword
