import styled from 'styled-components';
import FavoriteIcon from '@/assets/info/favorite.svg';
import ActiveFavoriteIcon from '@/assets/info/ReactionFavorite.svg';
import CommentIconImg from '@/assets/info/comment.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 1114px;
  min-height: max-content;
  margin-top: 4.5056dvh;
  margin-left: 4.11dvw;
  padding-left: 3.306878dvw;
  /* padding-top: 2.42973dvh; */
  background-color: #ffffff;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(38, 135, 78, 0.1);
  border-radius: 12px 12px 0px 0px;
`;

export const Title = styled.h1`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 93px;
  letter-spacing: -0.05em;
  height: 93px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 1076px;
  height: 46px;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 60px;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 93px;
  height: 46px;
  padding-left: 12px;
`;
export const ProfileName = styled.h2`
  font-size: 16px;
  color: #1b1b1b;
  width: 300px;
  height: 19px;
`;
export const ProfileDate = styled.h3`
  padding-top: 8px;
  font-size: 16px;
  color: #adadad;
  width: 100px;
  height: 19px;
`;

export const DividingLine = styled.hr<{ $marginTop: number }>`
  margin: 0px;
  width: calc(1032.667px - 3.306878dvw);
  height: 0px;
  margin-top: ${(props) => `${props.$marginTop}px`};
  border: 1px solid #e3e3e3;
  margin-left: 1dvw;
`;

export const Content = styled.div`
  width: 980px;
  padding-left: 10px;
  padding-top: 10px;
  white-space: pre-line;
  min-height: max-content;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  letter-spacing: -0.05em;

  color: #1b1b1b;
`;

export const ReactionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 159px;
  margin-left: 1.5dvw;
`;

export const HeartBox = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const DisableFavoriteIcon = styled(FavoriteIcon)``;
export const EnableFavoriteIcon = styled(ActiveFavoriteIcon)`
  width: 21px;
  height: 19px;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CommentIcon = styled(CommentIconImg)``;

export const CommentBox = styled.div`
  width: 1114px;
  min-height: 697px;
  max-height: max-content;
  /* Frame 66 */

  /* 오토레이아웃 */
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 4.11dvw;
  padding-left: 3.306878dvw;
  width: 1114px;
  height: 697px;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(38, 135, 78, 0.1);
  border-radius: 0px 0px 12px 12px;
`;

export const WriteWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 1076px;
  height: 85px;
`;

export const WriteBox = styled.input`
  width: 631px;
  height: 32px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #adadad;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;

  color: #1b1b1b;

  &::placeholder {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #adadad;
  }

  &:focus {
    outline: none;
  }
`;
