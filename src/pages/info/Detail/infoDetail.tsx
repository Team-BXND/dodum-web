import * as S from './infoDetail.ts';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImg from '@/assets/info/test.png';
import type { InfoCommentProps } from '@/types/infoList.ts';
import InfoCommentList from '@/components/InfoCommentList/InfoCommentList.tsx';
import { infoItems } from '@/constants/info.constants.ts';

const InfoDetail = () => {
  const location = useLocation();
  const {
    id,
    title,
    subtitle,
    name,
    content,
    author,
    category,
    createdAt,
    likes,
    comments,
    views,
    imageUrls,
  } = location.state as {
    id?: number;
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
  const post = infoItems.flatMap((item) => item.posts).find((p) => p.id === id);
  return (
    <S.Container>
      <S.MainDetail>
        <S.Title>{title}</S.Title>
        <S.ProfileBox>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.ProfileInfo>
            <S.ProfileName>{author}</S.ProfileName>
            <S.ProfileDate>{createdAt}</S.ProfileDate>
          </S.ProfileInfo>
        </S.ProfileBox>
        <S.DividingLine $marginTop={60} />
        <S.Content>{content}</S.Content>
      </S.MainDetail>
      <S.CommentBox>
        <S.ReactionBar>
          <S.HeartBox $active={Active} onClick={() => setActive(!Active)}>
            {Active ? <S.EnableFavoriteIcon /> : <S.DisableFavoriteIcon />}
            {likes}
          </S.HeartBox>
          <S.CommentWrapper>
            <S.CommentIcon />
            {comments}
          </S.CommentWrapper>
          <h5>조회 {views}</h5>
        </S.ReactionBar>
        <S.DividingLine $marginTop={20} />
        <S.WriteWrapper>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.WriteBox placeholder="댓글을 입력해주세요" />
        </S.WriteWrapper>

        {post?.commentArr?.map(({ id, author, text, createdAt }: InfoCommentProps) => (
          <InfoCommentList
            key={id}
            id={id}
            author={author}
            text={text}
            createdAt={createdAt}
          />
        ))}
      </S.CommentBox>
    </S.Container>
  );
};

export default InfoDetail;
