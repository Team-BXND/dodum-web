import * as S from './style';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileImg from '@/assets/info/test.png';
import Caption from '@/components/Text/Caption';
import { SERVER_URL } from '@/constants/api';
import { privateInstance } from '@/api/axiosInstance.ts';
import { getUserRole } from '@/utils/cookie';
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

  const role = getUserRole();

  const handleApprovalClick = () => {
    privateInstance
      .post(`${SERVER_URL}/${parentsProps.id}/approve`, {
        id: parentsProps.id,
      })
      .then((response) => {
        alert('승인');
      })
      .catch((error) => {
        console.log(`에러 발생 ${error}`);
      });
  };

  const handleRefuseClick = () => {
    privateInstance
      .post(`${SERVER_URL}/${parentsProps.id}/disappove`, {
        id: parentsProps.id,
      })
      .then((response) => {
        alert('승인 거부');
      })
      .catch((error) => {
        console.log(`에러 발생 ${error}`);
      });
  };

  return (
    <S.Container>
      <S.ApprovalBox $visible={!parentsProps.isApproved}>
        <S.ApprovalButton
          onClick={handleApprovalClick}
          style={{
            visibility:
              role === 'ADMIN' || role === 'TEACHER' ? 'visible' : 'hidden',
          }}
        >
          승인
        </S.ApprovalButton>
        <S.RefuseButton
          onClick={handleRefuseClick}
          style={{
            visibility:
              role === 'ADMIN' || role === 'TEACHER' ? 'visible' : 'hidden',
          }}
        >
          거부
        </S.RefuseButton>
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
              privateInstance
                .post(`${SERVER_URL}/info/${parentsProps.id}/like`, {
                  id: parentsProps.id,
                })
                .then(function () {
                  alert('하트 추가');
                })
                .catch(function (error) {
                  alert(error);
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
