import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.bgSecondary};
`;

export const Content = styled.div`
  flex: 1;
  height: 100vh;
  padding: 2rem;
  overflow-y: auto;
`;
