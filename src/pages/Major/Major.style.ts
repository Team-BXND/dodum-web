import styled from 'styled-components';

export const Container = styled.div`
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
