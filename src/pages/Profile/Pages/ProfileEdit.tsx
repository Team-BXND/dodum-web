import { ProfileImage, type IUserInfo } from "./Profile"
import * as S from "../styles/ProfileDetail.style"
import Caption from "@/components/Text/Caption"
import axios from "axios"
import { useEffect, useState } from "react"
import Button from "@/components/Buttons/Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import * as studentNumber from "@/constants/student-number.constants"
import { club } from "@/constants/club.constants"
import SubTitle from "@/components/Text/SubTitle"
import { useNavigate } from "react-router-dom"

type EditForm = {
  // username: string,
  email: string,
  grade: number,
  class_no: number,
  student_no: number,
  phone: string,
  club: string
}

function ProfileEdit() {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const navigator = useNavigate();

  const GetUserInfo = () => {
		axios.get("/api")
		.then((response) => {
			setUserInfo(response.data)
		})
		.catch((error) => {
      if (error.response.status >= 400) {
        alert(`데이터를 불러오는데 실패했습니다. (${error.response.status})`)
      }
		})
	}

  const submit: SubmitHandler<EditForm> = (data) => {
    axios.post("/api", {
      grade: data.grade,
      class_no: data.class_no,
      student_no: data.student_no,
      phone: data.phone,
      email: data.email,
      club: data.club
    })
    .then((response) => {
      alert(response)
    })
    .catch((error) => {
      alert(error.response.status)
    })
  }

  useEffect(() => {
    GetUserInfo();
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditForm>({
    defaultValues : {
      grade: userInfo?.grade,
      class_no: userInfo?.class_no,
      student_no: userInfo?.student_no,
      phone: userInfo?.phone,
      email: userInfo?.email,
      club: userInfo?.club
    }
  })

  return (
    <S.Container onSubmit={handleSubmit(submit)}>
      <S.Title>세부정보</S.Title>
      <S.ProfileContainer>
        <S.Profile>
          <ProfileImage />
          <SubTitle>{userInfo?.username}</SubTitle>
        </S.Profile>
        <S.InfoContainer>
          <S.Info>
            <S.Row>
              <Caption>{"이메일"}</Caption>
              <S.Input placeholder="이메일을 입력하세요." defaultValue={userInfo?.email} {...register("email", {required: "이 필드는 필수 입력 필드입니다.", pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "올바른 이메일 형식이 아닙니다.",
              },})} />
              {errors.email && <S.ErrorMsg>{errors.email.message}</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"학번"}</Caption>
              <S.StudentNumberContainer>
                  <S.ShortInput as="select" defaultValue={userInfo?.grade} {...register("grade", {required: true})}>
                    {studentNumber.grade.map((elem) => {
                      if (userInfo?.grade === elem.value) {
                        return (
                          <option selected key={elem.value} value={elem.value}>{elem.value}</option>
                        )
                      }
                      return (
                        <option key={elem.value} value={elem.value}>{elem.value}</option>
                      )
                    })}
                  </S.ShortInput>
                  <S.ShortInput as="select" defaultValue={userInfo?.class_no} {...register("class_no", {required: true})}>
                    {studentNumber.class_no.map((elem) => {
                      if (userInfo?.class_no === elem.value) {
                        return (
                          <option selected key={elem.value} value={elem.value}>{elem.value}</option>
                        )
                      }
                      return (
                        <option key={elem.value} value={elem.value}>{elem.value}</option>
                      )
                    })}
                  </S.ShortInput>
                  <S.ShortInput as="select" defaultValue={userInfo?.student_no} {...register("student_no", {required: true})}>
                    {studentNumber.student_no.map((elem) => {
                      if (userInfo?.student_no === elem.value) {
                        return (
                          <option selected key={elem.value} value={elem.value}>{elem.value}</option>
                        )
                      }
                      return (
                        <option key={elem.value} value={elem.value}>{elem.value}</option>
                      )
                    })}
                  </S.ShortInput>
              </S.StudentNumberContainer>
              {(errors.grade?.type === "required" || errors.class_no?.type === "required" || errors.student_no?.type === "required") && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
              {(
                  errors.grade?.type === "maxLength" || 
                  errors.grade?.type === "pattern" || 
                  errors.class_no?.type === "maxLength" || 
                  errors.class_no?.type === "pattern" || 
                  errors.student_no?.type === "maxLength" || 
                  errors.student_no?.type === "pattern"
                ) && 
                <S.ErrorMsg>유효한 학번을 입력하세요.</S.ErrorMsg>
              }
            </S.Row>
            <S.Row>
              <Caption>{"전화번호"}</Caption>
              <S.Input placeholder="전화번호를 입력하세요." defaultValue={userInfo?.phone} {...register("phone", {required: "이 필드는 필수 선택 필드입니다.", 
              pattern: {
                value: /^[0-9]*$/,
                message: "유효한 전화번호를 입력하세요."}, 
                minLength: {
                  value: 10,
                  message: "유효한 전화번호를 입력하세요."
                }})} />
              {errors.phone && <S.ErrorMsg>{errors.phone.message}</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"동아리"}</Caption>
              <S.Input as="select" defaultValue={userInfo?.club} {...register("club", {required: true, 
                validate: (value) => {
                  if (value === "none") {
                    return "이 필드는 필수 선택 필드입니다.";
                  }
                  return true;
                },})}>
                <option hidden value="none">동아리를 선택하세요.</option>
                {club.map((elem) => {
                  if (userInfo?.club == elem.name) {
                    return (
                      <option key={elem.id} selected value={elem.name}>{elem.name}</option>
                    )
                  } else {
                    return (
                      <option key={elem.id} value={elem.name}>{elem.name}</option>
                    )
                  }
                })}
              </S.Input>
              {errors.club?.type === "validate" && <S.ErrorMsg>{errors.club.message}</S.ErrorMsg>}
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

export default ProfileEdit
