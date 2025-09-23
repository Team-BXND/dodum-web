import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44rem;
  padding: 1.75rem 2rem;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 1rem;
  border-left: 1rem solid ${(props) => props.theme.mainColor};
  box-shadow: 1px 1px 2px ${(props) => props.theme.mainColor};
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

export const CircleBox = styled.div`
  display: flex;
  align-items: center;
  width: 67.5%;
  justify-content: space-between;
`;

export const Circle = styled.input.attrs({ type: 'radio', name: 'major' })`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.mainColor};
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 4px lightgray;
  }
  &:checked {
    background-color: ${(props) => props.theme.mainColor};
  }
  &:focus-visible {
    outline: 2px dotted #26874e;
    outline-offset: 2px;
  }
`;

export const OutCircle = styled(Circle)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const MiddleCircle = styled(Circle)`
  width: 1.75rem;
  height: 1.75rem;
  border: 2px solid ${(props) => props.theme.textSecondary};
  &:checked {
    background-color: ${(props) => props.theme.textSecondary};
  }
`;

export const ResWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
