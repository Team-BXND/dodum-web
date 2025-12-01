import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 16px;
  padding: 36px;
  justify-content: space-between;
`


export const PageNumberContainer = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
  padding: 8px;
  background-color: ${(props) => props.theme.bgPrimary};
`

export const PageNumber = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.bgSecondary};
  border: 0;
`

export const StyledPagination = styled(ReactPaginate)`
  display: flex;
  cursor: pointer;
  gap: 16px;
  li {
    background-color: #fff;
    width: 10px;
    height: 10px;
  }
`

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  gap: 69px;
`

export const PostInfo = styled.div`
  display: flex;
  height: 100%;
  align-items: end;
  gap: 16px;
`

export const Image = styled.img`
  width: 75px;
  height: 60px;
`

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: #FF7531;
`