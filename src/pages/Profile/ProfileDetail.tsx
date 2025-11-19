import SubTitle from "@/components/Text/SubTitle"
import { ProfileImage, type IUserInfo } from "./Profile"
import * as S from "./ProfileDetail.style"
import Caption from "@/components/Text/Caption"
import axios from "axios"
import { useEffect, useState } from "react"
import Button from "@/components/Buttons/Button"
import { useNavigate } from "react-router-dom"

function Detail() {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const navigator = useNavigate();

  const GetUserInfo = () => {
		axios.get("/api")
		.then((response) => {
			setUserInfo(response.data)
		})
		.catch((error) => {
			alert(error.response)
		})
	}

  useEffect(() => {
    GetUserInfo();
  }, [])

  return (
    <S.Container>
      <S.Title>세부정보</S.Title>
      <S.ProfileContainer>
        <S.Profile>
          <ProfileImage />
          <SubTitle>{userInfo?.username}</SubTitle>
        </S.Profile>
        <S.InfoContainer>
          <S.Info>
            <Caption>{"이메일"}</Caption>
            <SubTitle>{userInfo?.email}</SubTitle>
            <Caption>{"학번"}</Caption>
            <SubTitle>{userInfo?.grade}학년 {userInfo?.class_no}반 {userInfo?.student_no}번</SubTitle>
            <Caption>{"전화번호"}</Caption>
            <SubTitle>{userInfo?.phone}</SubTitle>
            <Caption>{"동아리"}</Caption>
            <SubTitle>{userInfo?.club}</SubTitle>
          </S.Info>
        </S.InfoContainer>
      </S.ProfileContainer>
      <S.Buttons>
        <Button text="정보 수정" onClick={() => navigator("/profile/edit")}/>
        <Button text="뒤로가기" isGray onClick={() => navigator("/profile")}/>
      </S.Buttons>
    </S.Container>
  )
}

export default Detail
