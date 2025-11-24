import * as S from '@/pages/info/Detail/infoDetail.style';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImg from '@/assets/info/test.png';
import Caption from '@/components/Text/Caption';

const InfoDetail = () => {
  const location = useLocation();
  const {
    title,
    content,
    author,
    createdAt,
    likes,
    comments,
    views,
  } = location.state as {
    title?: string;
    subtitle?: string;
    name?: string;
    content?: string;
    author?: string;
    category?: string;
    createdAt?: string;
    likes?: number;
    comments?: number;
    commentsArr?: Comment[];
    views?: number;
    imageUrls: string;
  };
  const [Active, setActive] = useState(false);
  return (
    <S.Container>
      <S.MainDetail>
        <h1>{title}</h1>
        <S.ProfileBox>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.ProfileInfo>
            <h2>{author}</h2>
            <h3>{createdAt}</h3>
          </S.ProfileInfo>
        </S.ProfileBox>
        <S.DividingLine $marginTop={60} />
        <S.Content>{content}</S.Content>
      </S.MainDetail>
      <S.CommentBox>
        <S.ReactionBar>
          <S.HeartBox $active={Active} onClick={() => setActive(!Active)}>
            {Active ? <S.EnableFavoriteIcon /> : <S.DisableFavoriteIcon />}
            <Caption color="secondary">{likes}</Caption>
          </S.HeartBox>
          <S.CommentWrapper>
            <S.CommentIcon />
            <Caption color="secondary">{comments}</Caption>
          </S.CommentWrapper>
          <Caption color="secondary">조회 {views}</Caption>
        </S.ReactionBar>
      </S.CommentBox>
    </S.Container>
  );
};

export default InfoDetail;
