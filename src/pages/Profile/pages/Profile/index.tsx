import SubTitle from "@/components/Text/SubTitle";
import * as S from "../../styles/Profile.style"
import Caption from "@/components/Text/Caption";
import TileTitle from "@/components/Text/TileTItle";
import Arrow from "@/assets/Profile/Arrow.svg"
import { Link, useNavigate } from "react-router-dom";
import { MiniTile } from "@/components/TileContents";
import Placeholder from "@/assets/Profile/Placeholder.png"
import Archive from "@/assets/Profile/Archive.svg"
import { useEffect, useState } from "react";
import Button from "@/components/Buttons";
import {privateInstance} from "@/api/axiosInstance.ts";
import {logout} from "@/api/auth.ts";

const SERVER_URL = import.meta.env.VITE_SERVER_URL

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

export interface IUserInfo {
	username: string;
	phone: string;
	email: string;
	grade: number;
	class_no: number;
	student_no: number;
	club: typeof CLUB[keyof typeof CLUB];
}

export interface IPosts {
	title: string;
	Date: string;
	Image: string;
}

export const MyPosts = ({posts} : {posts: IPosts[]}) => {
	return (
		<S.PostContainer>
			<S.PostHeader>
				<TileTitle>작성한 글</TileTitle>
				<Link to="/profile/posts"><Arrow /></Link>
			</S.PostHeader>
			<S.Posts>
				{posts.length > 0 ? posts.map((elem) => {
					return (
						<MiniTile to="" title={elem.title} date={elem.Date} thumbnail={elem.Image} />
					)
				}) : "작성글이 없습니다."}
			</S.Posts>
		</S.PostContainer>
	)
}

export const getPosts = (setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>) => {
	privateInstance.get(`${SERVER_URL}/profile/write`)
	.then((response) => {
		if(Array.isArray(response))
			setPosts(response.data);
	})
	.catch((error) => {
		alert(`작성글 데이터를 불러오는데 실패했습니다. (${error.response.status})`)
	})
}

function Profile() {
	const navigator = useNavigate();
	const [userInfo, setUserInfo] = useState<IUserInfo>()
	const [posts, setPosts] = useState<IPosts[]>([])

	const GetUserInfo = () => {
		privateInstance.get(`${SERVER_URL}/profile`)
		.then((response) => {
			setUserInfo(response.data)
		})
		.catch((error) => {
			alert(`데이터를 불러오는데 실패했습니다. (${error.response.status})`)
		})
	}

	useEffect(() => {
		GetUserInfo();
		getPosts(setPosts);
	}, [])

	return (
		<S.Container>
			<S.Title>
				내 정보
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
				<MyPosts posts={posts}/>
			</S.Body>
			<S.Buttons>
				<Button text="상세 정보" onClick={() => navigator("/profile/detail")}/>
				<Button text="정보 수정" onClick={() => navigator("/profile/edit")}/>
				<S.LogoutButton text="로그아웃" onClick={() => logout()}/>
			</S.Buttons>
		</S.Container>
	)
}

export default Profile;