import styled from 'styled-components';
import FavoriteIcon from '@/assets/info/favorite.svg';
import ActiveFavoriteIcon from '@/assets/info/ReactionFavorite.svg';
import CommentIconImg from '@/assets/info/comment.svg';

interface ApprovalBoxProps {
  $visible?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 1114px;
  min-height: 670px;
  max-height: max-content;
  margin-top: 3.5056dvh;
  margin-left: 4.11dvw;
  padding-left: 3.306878dvw;
  background-color: #ffffff;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(38, 135, 78, 0.1);
  border-radius: 12px 12px 0px 0px;
  > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 93px;
    letter-spacing: -0.05em;
    height: 93px;
  }
`;

export const SubInfo = styled.div``;

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

  > h2 {
    font-size: 16px;
    color: ${(props) => props.theme.textPrimary};
    width: 300px;
    height: 19px;
  }

  > h3 {
    padding-top: 8px;
    font-size: 16px;
    color: ${(props) => props.theme.btnGraySecondary};
    width: 100px;
    height: 19px;
  }
`;

export const DividingLine = styled.hr<{ $marginTop: number }>`
  margin: 0px;
  width: calc(1032.667px - 1.306878dvw);
  height: 0px;
  margin-top: ${(props) => `${props.$marginTop}px`};
  border: 1px solid #e3e3e3;
  margin-left: 0.1dvw;
`;

export const Content = styled.p`
  width: 980px;
  padding-left: 10px;
  padding-top: 10px;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  word-wrap: break-word;

  color: ${(props) => props.theme.textPrimary};
`;

export const ReactionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 10px;
  margin-bottom: 3dvh;
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

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 4.11dvw;
  padding-left: 3.306878dvw;

  background: ${(props) => props.theme.bgPrimary};
  box-shadow: 4px 4px 4px rgba(38, 135, 78, 0.1);
  border-radius: 0px 0px 12px 12px;
`;

export const ApprovalButton = styled.button`
  width: 131px;
  height: 40px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 8px;
  text-align: center;
  line-height: 40px;
  padding: 0px;
  margin: 0px;
  border: none;
`;

export const RefuseButton = styled.button`
  width: 131px;
  height: 40px;
  background-color: #d80000;
  border-radius: 8px;
  text-align: center;
  line-height: 40px;
  padding: 0px;
  margin: 0px;
  border: none;
`;

export const ApprovalBox = styled.div<ApprovalBoxProps>`
  display: flex;
  gap: 25px;
  width: 1188px;
  justify-content: flex-end;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
`;
