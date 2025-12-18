import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  height: 100vh;
`;

export const LoadingText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
  min-width: 300px;
  text-align: center;
`;

export const ProgressCircle = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 0.75rem solid ${(props) => props.theme.textSecondary};
  border-top-color: ${(props) => props.theme.mainColor};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
