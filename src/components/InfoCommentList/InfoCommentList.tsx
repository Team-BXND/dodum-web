import * as S from './InfoCommentList.style';
import type { InfoCommentProps } from '@/types/infoList';
import { ProfileImage } from '@/pages/info/Detail/infoDetail';
import ProfileImg from '@/assets/info/ProfileImg.png';

const InfoCommentList = ({ id, author, text, createdAt }: InfoCommentProps) => {
  const date = new Date(createdAt);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date
    .getDate()
    .toString()
    .padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <S.Container>
      <S.MainContent>
        <ProfileImage src={ProfileImg}></ProfileImage>
        <S.SubContent>
          <h2>{author}</h2>
          <h3>{text}</h3>
          <h4>{formattedDate}</h4>
        </S.SubContent>
      </S.MainContent>
      <S.DividingLine />
    </S.Container>
  );
};

export default InfoCommentList;
