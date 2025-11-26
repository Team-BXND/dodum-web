import * as S from '@/pages/info/Detail/infoDetail.style';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImg from '@/assets/info/test.png';
import Caption from '@/components/Text/Caption';
import axios from 'axios';

const InfoDetail = () => {
  const location = useLocation();

  const state = location.state as {
    id?: number;
    title?: string;
    content?: string;
    author?: string;
    createdAt?: string;
    likes?: number;
    comments?: number;
    views?: number;
    isApproved: boolean;
  };
  const parentsProps = { ...state };
  const [Active, setActive] = useState(false);
  return (
    <S.Container>
      <S.ApprovalBox $visible={!parentsProps.isApproved}>
        <S.ApprovalButton>승인</S.ApprovalButton>
        <S.RefuseButton>거부</S.RefuseButton>
      </S.ApprovalBox>
      <S.MainDetail>
        <h1>{parentsProps.title}</h1>
        <S.ProfileBox>
          <S.ProfileImage src={ProfileImg}></S.ProfileImage>
          <S.ProfileInfo>
            <h2>{parentsProps.author}</h2>
            <h3>{parentsProps.createdAt}</h3>
          </S.ProfileInfo>
        </S.ProfileBox>
        <S.DividingLine $marginTop={60} />
        <S.Content>{parentsProps.content}</S.Content>
      </S.MainDetail>
      <S.CommentBox>
        <S.ReactionBar>
          <S.HeartBox
            $active={Active}
            onClick={() => {
              setActive(!Active);
              axios
                .post('', {
                  id: parentsProps.id,
                })
                .then(function () {
                  alert("하트 추가")
                })
                .catch(function (error) {
                  alert(error)
                });
            }}
          >
            {Active ? <S.EnableFavoriteIcon /> : <S.DisableFavoriteIcon />}
            <Caption color="secondary">{parentsProps.likes}</Caption>
          </S.HeartBox>
          <S.CommentWrapper>
            <S.CommentIcon />
            <Caption color="secondary">{parentsProps.comments}</Caption>
          </S.CommentWrapper>
          <Caption color="secondary">조회 {parentsProps.views}</Caption>
        </S.ReactionBar>
      </S.CommentBox>
    </S.Container>
  );
};

export default InfoDetail;
