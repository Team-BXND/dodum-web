import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
`;

export const SubTitle = styled.span`
  color: ${(props) => props.theme.subColor};
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  margin-top: 4rem;
  color: ${(props) => props.theme.textPrimary};
  ${SubTitle} {
    color: ${(props) => props.theme.subColor};
  }
`;

export const Button = styled.button`
  width: 20rem;
  height: 3rem;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.bgPrimary};
  border: 1px solid ${(props) => props.theme.mainColor};
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.bgSecondary};
  }
`;
