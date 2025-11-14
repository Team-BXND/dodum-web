import type { InfoListProps } from '@/types/infoList';
import * as S from './InfoList.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const InfoList = ({
  id,
  title,
  name,
  content,
  author,
  category,
  createdAt,
  likes,
  comments,
  views,
  imageUrls,
}: InfoListProps) => {
  const [lookEditor, setLookEditor] = useState(false);
  const navigate = useNavigate();
  const parentProps = {
    id,
    title,
    name,
    content,
    author,
    category,
    createdAt,
    likes,
    comments,
    views,
  };
  return (
    <S.Container
      onClick={() => {
        navigate(`/info/${id}`, {
          state: { from: 'list', ...parentProps },
        });
      }}
    >
      <S.InfoItem>
        <S.Bullet>
          <li></li>
        </S.Bullet>
        <S.MainInfo>
          <h2>{title}</h2>
          <h4>{author}</h4>
        </S.MainInfo>
        <S.SubInfo>
          <S.Favorite></S.Favorite>
          <h3>{likes}</h3>
          <S.Comment></S.Comment>
          <h4>{comments}</h4>
          <h5>조회 {views}</h5>
        </S.SubInfo>
        <S.ImgContainer>
          <img src={imageUrls} alt="미리보기"></img>
        </S.ImgContainer>
        <S.Etc></S.Etc>
      </S.InfoItem>
    </S.Container>
  );
};
export default InfoList;
