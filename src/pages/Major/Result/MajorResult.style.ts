import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 4rem;
  width: 100%;
  overflow-y: hidden;
`;

export const SubTitle = styled.span`
  color: ${(props) => props.theme.subColor};
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
  ${SubTitle} {
    color: ${(props) => props.theme.subColor};
  }
`;

export const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

export const LeftDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  height: 100%;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DescriptionInfo = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.mainColor};
`;

export const DescriptionDetail = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.theme.textPrimary};
`;

export const FightingBox = styled(DescriptionBox)`
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: ${(props) => props.theme.mainColor};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const RightDescriptionContainer = styled(LeftDescriptionContainer)``;
export const GraphContainer = styled(DescriptionBox)``;

export const GraphBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
  height: 100%;
`;

export const GraphItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

export const GraphBar = styled.div<{ $percent: number }>`
  width: 2.5rem;
  height: ${(props) => props.$percent * 0.5}rem;
  background-color: ${(props) => {
    if (props.$percent >= 50) return props.theme.mainColor;
    if (props.$percent >= 30) return props.theme.subColor;
    return props.theme.textSecondary;
  }};
  border-radius: 4px 4px 0 0;
`;

export const GraphLabel = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.textPrimary};
`;
