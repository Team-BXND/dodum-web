import * as S from './infoDetail.ts';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImg from '@/assets/info/ProfileImg.png';
import InfoCommentList from '@/components/InfoCommentList/InfoCommentList.tsx';
import { infoItems } from '@/constants/info.constants.ts';

const InfoDetail = () => {
  const location = useLocation();
  const {
    id,
    title,
    name,
    content,
    author,
    category,
    createdAt,
    likes,
    comment,
    view,
    img,
  } = location.state as {
    id: number;
    title: string;
    name: string;
    content: string;
    author: string;
    category: string;
    createdAt: string;
    likes: number;
    comment: number;
    view: number;
    img: string;
  };
  const date = new Date(createdAt);
  const yyyy_mm_dd = date.toLocaleDateString('sv-SE'); // "2025-09-28"
  const [year, month, day] = yyyy_mm_dd.split('-');
  const formattedDate = `${year}.${month}.${day}`; // "25.09.28"
  const [Active, setActive] = useState(false);
  return (
    <S.Container>
      <S.MainDetail>
        <S.Title>{title}</S.Title>
        <S.ProfileBox>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.ProfileInfo>
            <S.ProfileName>{name}</S.ProfileName>
            <S.ProfileDate>{formattedDate}</S.ProfileDate>
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
            {comment}
          </S.CommentWrapper>
          <h5>조회 {view}</h5>
        </S.ReactionBar>
        <S.DividingLine $marginTop={20} />
        <S.WriteWrapper>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.WriteBox placeholder='댓글을 입력해주세요'/>
        </S.WriteWrapper>

        {infoItems[0].posts[0].comments?.map(
          ({ id, author, text, createdAt }) => (
            <InfoCommentList
              key={id}
              id={id}
              author={author}
              text={text}
              createdAt={createdAt}
            />
          )
        )}
      </S.CommentBox>
    </S.Container>
  );
};

export default InfoDetail;
