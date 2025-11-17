import SubTitle from "@/components/Text/SubTitle";
import * as S from "./Profile.style"
import Caption from "@/components/Text/Caption";
import TileTitle from "@/components/Text/TileTItle";
import Arrow from "@/assets/Profile/Arrow.svg"
import { Link } from "react-router-dom";
import { MiniTile } from "@/components/TileContents/TileContents";
import Placeholder from "@/assets/Profile/Placeholder.png"
import Archive from "@/assets/Profile/archive.svg"
import Comment from "@/assets/Profile/comment.svg"

function Profile() {
	return (
		<S.Container>
			<S.Title>
				{"user"}님의 프로필
			</S.Title>
			<S.Body>
				<S.UserInfo>
					<S.Profile>
						<S.ProfileImage src={Placeholder} />
						<S.ProfileText>
							<SubTitle>{"Username"}</SubTitle>
							<S.Info>
								<Caption>{"1학년 1반 1번"}</Caption>
								<Caption>{"바인드"}</Caption>
							</S.Info>
						</S.ProfileText>
					</S.Profile>
					<S.ActivityContainer>
						<S.Activity>
							<S.ActivityTitle>
								<Archive />
								<Caption>{"작성한 글"}</Caption>
							</S.ActivityTitle>
							<Caption>{"62개"}</Caption>
						</S.Activity>
						<S.VLine />
						<S.Activity>
							<S.ActivityTitle>
								<Comment />
								<Caption>{"작성한 댓글"}</Caption>
							</S.ActivityTitle>
							<Caption>{"62개"}</Caption>
						</S.Activity>
					</S.ActivityContainer>
				</S.UserInfo>
				<S.PostContainer>
					<S.PostHeader>
						<TileTitle>작성한 글</TileTitle>
						<Link to=""><Arrow /></Link>
					</S.PostHeader>
					<S.Posts>
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
						<MiniTile to="dd" title="dd" author="dd" />
					</S.Posts>
				</S.PostContainer>
			</S.Body>
		</S.Container>
	)
}

export default Profile;