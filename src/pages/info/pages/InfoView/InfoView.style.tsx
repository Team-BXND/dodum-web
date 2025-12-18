import styled, { keyframes } from 'styled-components';
import SearchIcon from '@/assets/info/Search.svg';
import CheckIcon from '@/assets/info/Check.svg';

interface AllowButtonProps {
  $active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  max-width: 1114px;
  height: 570px;
  left: 300px;
  top: 127px;

  background: ${(props) => props.theme.bgPrimary};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

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

  border: 1px solid ${(props) => props.theme.btnGraySecondary};
  border-radius: 8px;
  padding-left: 33px;
`;

export const Search = styled(SearchIcon)`
  position: absolute;
  left: 1175px;
  top: 85px;
`;

export const List = styled.div`
  width: 1094px;
  height: 570px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  overflow-y: auto;
`;

export const Box = styled.div`
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

  > h1 {
    width: 200px;
    height: 38px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    letter-spacing: -0.05em;
    color: ${(props) => props.theme.textPrimary};
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const AddButtonWrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  width: 72px;
  border: none;
  background-color: ${(props) => props.theme.bgSecondary};
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
  color: ${({ theme, $active }) =>
    $active ? theme.textPrimary : theme.btnGraySecondary};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
`;

export const AllowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  gap: 10px;
  position: relative;
  top: 50px;
`;

export const AllowButton = styled.button<AllowButtonProps>`
  width: 127px;
  height: 30px;

  background-color: ${({ theme, $active }) =>
    $active ? theme.btnPrimary : theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.btnPrimary};
  border-radius: 15px;
`;

const toastCycle = keyframes`
  0% { 
    transform: translateX(120%); 
    opacity: 0; 
  }
  16.6% { 
    transform: translateX(0); 
    opacity: 1; 
  }
  83.3% { 
    transform: translateX(0); 
    opacity: 1; 
  }
  100% { 
    transform: translateX(120%); 
    opacity: 0; 
  }
`;

export const ToastContainer = styled.div`
  width: 397px;
  height: 81.98px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 20px;
  right: -8px;
  color: #fff;
  border-radius: 5px;
  z-index: 3000;
  background-color: transparent;
  animation: ${toastCycle} 5s forwards ease-in-out;
`;

export const ToastCircle = styled.div`
  flex-shrink: 0;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #26874e;
  width: 74.53px;
  height: 74.53px;
  box-sizing: border-box;
  box-shadow: -4px 4px 4px rgba(38, 135, 78, 0.1);
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToastTextContainer = styled.div`
  width: 365.48px;
  height: 81.98px;

  background: #ffffff;
  box-shadow: -4px 4px 4px rgba(38, 135, 78, 0.1);
  border-radius: 12px 0px 0px 12px;
  z-index: 4000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  margin-left: -50px;
  padding-left: 20px;
`;

export const Check = styled(CheckIcon)`
  z-index: 5001;
`;
