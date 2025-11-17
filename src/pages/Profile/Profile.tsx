import SubTitle from "@/components/Text/SubTitle";
import * as S from "./Profile.style"
import Caption from "@/components/Text/Caption";
import TileTitle from "@/components/Text/TileTItle";
import Arrow from "@/assets/Profile/Arrow.svg"
import { Link } from "react-router-dom";
import { MiniTile } from "@/components/TileContents/TileContents";
import Placeholder from "@/assets/Profile/Placeholder.png"
import Archive from "@/assets/Profile/archive.svg"
import { useEffect, useState } from "react";
import axios from "axios";

const CLUB = {
	BIND: "BIND",
	삼디: "삼디",
	두카미: "두카미",
	Louter: "Louter",
	CNS: "CNS",
	모디: "모디",
	ALT: "ALT",
	Chatty: "Chatty",
	NONE: "NONE"
} as const

interface IUserInfo {
	username: string;
	phone: string;
	email: string;
	grade: number;
	class_no: number;
	student_no: number;
	club: typeof CLUB[keyof typeof CLUB];
}

interface IPosts {
	title: string;
	Date: string;
	Image: string;
}

function Profile() {

	const [userInfo, setUserInfo] = useState<IUserInfo>()
	const [posts, setPosts] = useState<IPosts[]>([])

	const GetUserInfo = () => {
		axios.get("/api")
		.then((response) => {
			setUserInfo(response.data)
		})
		.catch((error) => {
			alert(error.response)
		})
	}

	const GetPosts = () => {
		axios.get("/api")
		.then((response) => {
			if(Array.isArray(response))
				setPosts(response.data);
		})
		.catch((error) => {
			alert(error.response)
		})
	}

	useEffect(() => {
		GetUserInfo();
		GetPosts();
	}, [])

	return (
		<S.Container>
			<S.Title>
				{userInfo?.username}님의 프로필
			</S.Title>
			<S.Body>
				<S.UserInfo>
					<S.Profile>
						<S.ProfileImage src={Placeholder} />
						<S.ProfileText>
							<SubTitle>{userInfo?.username || "로딩중.."}</SubTitle>
							<S.Info>
								<Caption>{userInfo?.grade}년 {userInfo?.class_no}반 {userInfo?.student_no}번</Caption>
								<Caption>{userInfo?.club}</Caption>
							</S.Info>
						</S.ProfileText>
					</S.Profile>
					<S.ActivityContainer>
						<S.Activity>
							<S.ActivityTitle>
								<Archive />
								<Caption>작성한 글</Caption>
							</S.ActivityTitle>
							<Caption>{posts.length}</Caption>
						</S.Activity>
					</S.ActivityContainer>
				</S.UserInfo>
				<S.PostContainer>
					<S.PostHeader>
						<TileTitle>작성한 글</TileTitle>
						<Link to=""><Arrow /></Link>
					</S.PostHeader>
					<S.Posts>
						{posts.length > 0 ? posts.map((elem) => {
							return (
								<MiniTile to="" title={elem.title} date={elem.Date} thumbnail={elem.Image} />
							)
						}) : "작성글이 없습니다."}
					</S.Posts>
				</S.PostContainer>
			</S.Body>
		</S.Container>
	)
}

export default Profile;