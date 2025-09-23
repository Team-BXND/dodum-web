import styled from 'styled-components';

export const Container = styled.div`
  width: 44rem;
  height: 8rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  box-shadow: 1px 1px 2px ${(props) => props.theme.mainColor};
`;
