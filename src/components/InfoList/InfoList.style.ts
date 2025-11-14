import styled from 'styled-components';
import FavoriteIcon from '@/assets/info/favorite.svg';
import CommentIcon from '@/assets/info/comment.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5em 1em;
  padding-top: 0.6em;
`;

export const InfoItem = styled.div`
  display: flex;
  border-bottom: 1px solid #e3e3e3;
  padding-top: 0.4em;
  height: 4em;
  &:hover {
    background-color: #eaeaea;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  h2 {
    font-size: 24px;
  }
  h4 {
    padding: 0.533em 0;
    font-size: 16px;
    color: #adadad;
    font-family: 'Inter';
    letter-spacing: -0.05em;
    line-height: 19px;
  }
  flex: 13;
`;
export const SubInfo = styled.div`
  display: flex;
  flex: 8.5;
  align-items: flex-end;
  > * {
    bottom: 0.4em;
    position: relative;
  }

  h3 {
    font-size: 20px;
    bottom: 0.4em;
    left: -1em;
    color: #adadad;
  }

  h4 {
    font-size: 20px;
    bottom: 0.4em;
    left: -0.3em;
    color: #adadad;
  }
  h5 {
    font-size: 20px;
    bottom: 0.4em;
    left: 1em;
    color: #adadad;
  }
`;

export const Bullet = styled.ul`
  list-style: inside;
  height: 1.4em;

  li::before {
    content: '•';
    color: #ff7531;
    font-size: 3em;
    position: absolute;
    left: 0;
    bottom: -0.7em;
    padding-left: 0.1em;
  }

  /* text-align: right; */
  flex: 0 0 2.7em;
  li {
    list-style: none;
    padding-left: 0;
    position: relative;
  }
`;

export const Favorite = styled(FavoriteIcon)`
  margin: 0.25rem 0.875rem;
  width: 3em;
  cursor: pointer;
`;

export const Comment = styled(CommentIcon)`
  margin: 0.25rem 0.875rem;
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

export const Etc = styled.button`
  z-index: 50;
`;

