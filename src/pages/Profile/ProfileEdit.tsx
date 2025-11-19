import { ProfileImage, type IUserInfo } from "./Profile"
import * as S from "./ProfileDetail.style"
import Caption from "@/components/Text/Caption"
import axios from "axios"
import { useEffect, useState } from "react"
import Button from "@/components/Buttons/Button"
import { useForm, type SubmitHandler } from "react-hook-form"
import Body from "@/components/Text/Body"
import { club } from "@/constants/club.constants"
import SubTitle from "@/components/Text/SubTitle"

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

  const GetUserInfo = () => {
		axios.get("/api")
		.then((response) => {
			setUserInfo(response.data)
		})
		.catch((error) => {
			alert(error.response)
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
    // GetUserInfo();
    setUserInfo({
      username: "정대원",
      grade: 1,
      class_no: 4,
      student_no: 16,
      phone: "01025952248",
      email: "2595daewon@gmail.com",
      club: "BIND"
    })
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
          {/* <S.ShortInput defaultValue={userInfo?.username} {...register("username", {required: true})} />
          {errors.username && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>} */}
        </S.Profile>
        <S.InfoContainer>
          <S.Info>
            <S.Row>
              <Caption>{"이메일"}</Caption>
              <S.Input defaultValue={userInfo?.email} {...register("email", {required: true})} />
              {errors.email && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"학번"}</Caption>
              <S.StudentNumberContainer>
                <S.InputRow>
                  <S.ShortInput defaultValue={userInfo?.grade} {...register("grade", {required: true, pattern: /^[0-9]*$/, maxLength: 1})} />
                  <Body>학년</Body>
                </S.InputRow>
                <S.InputRow>
                  <S.ShortInput defaultValue={userInfo?.class_no} {...register("class_no", {required: true, pattern: /^[0-9]*$/, maxLength: 1})} />
                  <Body>반</Body>
                </S.InputRow>
                <S.InputRow>
                  <S.ShortInput defaultValue={userInfo?.student_no} {...register("student_no", {required: true, pattern: /^[0-9]*$/, maxLength: 2})} />
                  <Body>번호</Body>
                </S.InputRow>
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
              <S.Input defaultValue={userInfo?.phone} {...register("phone", {required: true, pattern: /^[0-9]*$/, minLength: 10})} />
              {errors.phone?.type === "required" && <S.ErrorMsg>이 필드는 필수 입력 필드입니다.</S.ErrorMsg>}
              {(errors.phone?.type === "minLength" || errors.phone?.type === "pattern") && <S.ErrorMsg>유효한 전화번호를 입력하세요.</S.ErrorMsg>}
            </S.Row>
            <S.Row>
              <Caption>{"동아리"}</Caption>
              <S.Input as="select" defaultValue={userInfo?.club} {...register("club", {required: true, 
                validate: (value) => {
                  if (value === "none") {
                    return "동아리를 선택해주세요.";
                  }
                  return true;
                },})}>
                <option hidden value="none">동아리를 선택해주세요.</option>
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
        <Button text="취소" isGray />
      </S.Buttons>
    </S.Container>
  )
}

export default ProfileEdit
