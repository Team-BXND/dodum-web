import styled from 'styled-components';
import SearchIcon from '@/assets/info/search.svg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  width: 1114px;
  height: 570px;
  left: 300px;
  top: 127px;

  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  /* Rectangle 73 */

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchBox = styled.input`
  position: absolute;
  width: 236px;
  height: 39px;
  left: 1165px;
  top: 75px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
  }

  border: 1px solid #adadad;
  border-radius: 8px;
  padding-left: 33px;
`;

export const Search = styled(SearchIcon)`
  position: absolute;
  left: 1175px;
  top: 85px;
`;

export const List = styled.div`
  /* Rectangle 73 */

  width: 1094px;
  height: 570px;

  /* 내부 오토레이아웃 */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  overflow-y: auto;
`;

export const Box = styled.div`
  /* Group 79 */

  position: absolute;
  width: 1044.03px;
  height: 71px;
  left: 27px;
  top: 28px;
`;

export const Titletext = styled.h1`
  /* 정보공유 */
  width: 200px;
  height: 38px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.05em;

  color: #1b1b1b;

  /* 내부 오토레이아웃 */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Title = styled.div`
  /* Title */

  /* 오토레이아웃 */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 1122px;
  height: 39px;
  left: 356px;
  top: 82px;
`;

export const AddButtonWrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: 72px;
  border: none;
  background-color: #fafafa;
  left: 1370px;
  top: 750px;
`;

export const Pagination = styled.div`
  display: block;
  margin-top: 25px;
  height: 29px;
`;

export const PageBtn = styled.button<{ $active: boolean }>`
  background: none;
  border-radius: 6px;
  padding: 4px 12px;
  border: none;
  color: ${({ $active }) => ($active ? '#1b1b1b' : '#adadad')};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
`;
