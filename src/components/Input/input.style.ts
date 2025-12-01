import styled from "styled-components";
export const Input = styled.input`
  color: #adadad;
  font-size: 1.75rem;
  font-weight: 500;
  border: 1px solid #adadad;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 0;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  width: 62.625rem;
  color:#1B1B1B;
  &::placeholder {
    color: #adadad;
  }
`
export const Errortext=styled.h1`
  font-size:0.75rem;
  color:#FF0000;
  margin-top:0.5rem;
`
export const ErrorCover=styled.div`
  gap:0.25rem;
`;