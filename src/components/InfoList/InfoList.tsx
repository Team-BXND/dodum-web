import type { InfoListProps } from '@/types/infoList';
import * as S from './InfoList.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SubTitle from '../Text/SubTitle';
import Caption from '../Text/Caption';
import { SERVER_URL } from '@/constants/api';

const InfoList = (props: InfoListProps) => {
  const navigate = useNavigate();
  const parentProps = { ...props };
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!window.confirm('정말 삭제하시겠습니까?')) return;
    const token = localStorage.getItem('token');
    axios
      .delete(`${SERVER_URL}/info/${props.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert(response.data);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error('삭제 실패:', error);
        alert('삭제에 실패했습니다.');
      });
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.Container>
      <S.InfoItem
        onClick={() => {
          navigate(`/info/${props.id}`, {
            state: { from: 'list', ...parentProps },
          });
        }}
      >
        <S.Bullet>
          <li></li>
        </S.Bullet>
        <S.MainInfo>
          <SubTitle>{props.title}</SubTitle>
          <Caption color="#adadad">{props.author}</Caption>
        </S.MainInfo>
        <S.SubInfo $isVisible={props.isApproved}>
          <S.Favorite></S.Favorite>
          <h3>{props.likes}</h3>
          <S.Comment></S.Comment>
          <h4>{props.comments}</h4>
          <h5>조회 {props.views}</h5>
        </S.SubInfo>
        <S.ImgContainer>
          {props.isApproved ? (
            isHovered ? (
              <S.EditorBox>
                <S.AlterButton
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`alter`, {
                      state: { from: 'list', ...parentProps },
                    });
                  }}
                >
                  수정
                </S.AlterButton>
                <S.AlterButton onClick={handleDelete}>삭제</S.AlterButton>
              </S.EditorBox>
            ) : (
              <img src={props.imageUrls} alt="미리보기" />
            )
          ) : (
            <S.AllowCheckBox>
              <S.Approval />
              <p>승인 대기</p>
            </S.AllowCheckBox>
          )}
        </S.ImgContainer>
      </S.InfoItem>
      <S.Etc
        $isAuthor={props.author === '1313이형석'}
        $isVisible={props.isApproved}
        onClick={() => setIsHovered(!isHovered)}
      >
        <S.EtcCircle />
        <S.EtcCircle />
        <S.EtcCircle />
      </S.Etc>
    </S.Container>
  );
};
export default InfoList;
