import styled from 'styled-components';
import FavoriteIcon from '@/assets/info/favorite.svg';
import CommentIcon from '@/assets/info/comment.svg';
import ApprovalIcon from '@/assets/info/Approval.svg';
interface EtcProps {
  $isAuthor?: boolean;
  $isVisible?: boolean;
}


export const Container = styled.div`
  display: flex;
  width: 1094px;
  gap: 1rem;
  padding: 0.5em 1em;
  padding-right: 0px;
  padding-top: 0.6em;
`;

export const InfoItem = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  padding-top: 0.4em;
  height: 71px;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.85em;
  h2 {
    font-size: 24px;
  }

  h4 {
    padding: 0.533em 0;
    font-size: 16px;
    color: ${(props) => props.theme.btnGraySecondary};
    font-family: 'Inter';
    letter-spacing: -0.05em;
    line-height: 19px;
  }

  flex: 13;
`;
export const SubInfo = styled.div<EtcProps>`
  display: flex;
  flex: 8.5;
  align-items: flex-end;
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
  > * {
    bottom: 0.4em;
    position: relative;
  }

  h3 {
    font-size: 20px;
    bottom: 0.4em;
    left: -1em;
    color: ${(props) => props.theme.btnGraySecondary};
    width: 50px;
  }

  h4 {
    font-size: 20px;
    bottom: 0.4em;
    left: -0.3em;
    color: ${(props) => props.theme.btnGraySecondary};
    width: 40px;
  }

  h5 {
    font-size: 20px;
    bottom: 0.4em;
    left: 1em;
    color: ${(props) => props.theme.btnGraySecondary};
    width: 90px;
  }
`;

export const Bullet = styled.ul`
  list-style: inside;
  height: 1.4em;

  li::before {
    content: '•';
    color: ${(props) => props.theme.subColor};
    font-size: 3em;
    position: absolute;
    left: 0;
    bottom: -0.7em;
    padding-left: 0.1em;
  }

  flex: 0 0 2.7em;

  li {
    list-style: none;
    padding-left: 0;
    position: relative;
  }
`;

export const Favorite = styled(FavoriteIcon)`
  margin: 0.25rem 2rem 0.25rem 1.5rem;
  cursor: pointer;
`;

export const Comment = styled(CommentIcon)`
  margin: 0rem 0.875rem 0rem 0rem;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  width: 4.683125em;
  height: 3.80875em;
  bottom: 0.4em;
  left: 10em;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
  }
`;

export const Etc = styled.div<EtcProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  gap: 10px;
  visibility: ${(props) =>
    props.$isAuthor && props.$isVisible ? 'visible' : 'hidden'};
`;

export const EtcCircle = styled.button`
  width: 5px;
  height: 5px;
  border: none;
  border-radius: 100%;
  background: #d4d4d4;
  padding: 0px;
`;

export const EditorBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  width: 96px;
  height: 70px;
  bottom: 10px;
  right: 10px;

  background: #ffffff;
  border: 1px solid ${(props) => props.theme.btnGraySecondary};
  border-radius: 12px;
`;

export const AlterButton = styled.div`
  border-radius: 4px;
  text-align: center;
  height: 26px;
  line-height: 26px;
  &:hover {
    background-color: ${(props) => props.theme.bgSecondary};
  }
`;

export const AllowCheckBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  gap: 10px;

  width: 150px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 15px;
  right: 50px;
  top: 5px;

  > p {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: -0.05em;

    color: ${(props) => props.theme.mainColor};
  }
`;


export const Approval = styled(ApprovalIcon)``;
