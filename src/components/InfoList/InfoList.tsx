import type { InfoListProps } from '@/types/infoList';
import * as S from './InfoList.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SubTitle from '../Text/SubTitle';
import Caption from '../Text/Caption';
const InfoList = ({
  id,
  title,
  content,
  author,
  category,
  createdAt,
  likes,
  comments,
  views,
  imageUrls,
  isApproved,
}: InfoListProps) => {
  const navigate = useNavigate();
  const parentProps = {
    title,
    content,
    author,
    category,
    createdAt,
    likes,
    comments,
    views,
    isApproved,
  };
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.delete(`/info-api/info/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert(response.data);
        window.location.reload();
      }
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.Container>
      <S.InfoItem
        onClick={() => {
          navigate(`/info/${id}`, {
            state: { from: 'list', ...parentProps },
          });
        }}
      >
        <S.Bullet>
          <li></li>
        </S.Bullet>
        <S.MainInfo>
          <SubTitle>{title}</SubTitle>
          <Caption color='#adadad'>{author}</Caption>
        </S.MainInfo>
        <S.SubInfo $isVisible={isApproved}>
          <S.Favorite></S.Favorite>
          <h3>{likes}</h3>
          <S.Comment></S.Comment>
          <h4>{comments}</h4>
          <h5>조회 {views}</h5>
        </S.SubInfo>
        <S.ImgContainer>
          {isApproved ? (
            isHovered ? (
              <S.EditorBox>
                <S.AlterButton
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('수정 버튼 클릭');
                  }}
                >
                  수정
                </S.AlterButton>
                <S.AlterButton onClick={handleDelete}>삭제</S.AlterButton>
              </S.EditorBox>
            ) : (
              <img src={imageUrls} alt="미리보기" />
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
        $isAuthor={author === '1313이형석'}
        $isVisible={isApproved}
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
