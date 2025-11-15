import styled from 'styled-components';

export const Container = styled.div<{ $hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44rem;
  padding: 1.75rem 2rem;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  border: 1px solid ${(props) => (props.$hasError ? '#ef4444' : 'transparent')};
  border-left: 0.875rem solid ${(props) => props.theme.mainColor};
  box-shadow: 1px 1px 2px ${(props) => props.theme.textSecondary};
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.textPrimary};
`;

export const SubTitle = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.textSecondary};
`;

export const ResWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.input<{ $hasError?: boolean }>`
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.$hasError ? '#ef4444' : props.theme.textSecondary)};
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
  transition: all 0.2s ease;

  &::placeholder {
    color: ${(props) =>
      props.$hasError ? '#ef4444' : props.theme.textSecondary};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid
      ${(props) => (props.$hasError ? '#ef4444' : props.theme.mainColor)};
  }
`;
