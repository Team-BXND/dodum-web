import {
  majorResult,
  majorResultList,
} from '@/constants/major-result.constants';
import { useLocation } from 'react-router';
import * as S from './MajorResult.style';

interface IMajorResult {
  major: string;
  majorKey: 'web' | 'server' | 'game' | 'ios' | 'android' | 'ai';
  selectedReason: string;
  graph: { [key: string]: number };
}

const MajorResult = () => {
  const location = useLocation();
  const responseData = (location.state as IMajorResult) || majorResult;

  const { major, majorKey, selectedReason, graph } = responseData;
  const selectedMajor = majorResultList[majorKey];
  const { description, skills } = selectedMajor;
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <S.SubTitle>{major}</S.SubTitle>를 추천드립니다
        </S.Title>
        <S.DescriptionContainer>
          <S.LeftDescriptionContainer>
            <S.DescriptionBox>
              <S.DescriptionInfo>{major}란?</S.DescriptionInfo>
              <S.DescriptionDetail>{description}</S.DescriptionDetail>
              <S.DescriptionDetail>
                사용기술: {skills.join(', ')}
              </S.DescriptionDetail>
            </S.DescriptionBox>
            <S.DescriptionBox>
              <S.DescriptionInfo>선정 이유</S.DescriptionInfo>
              <S.DescriptionDetail>{selectedReason}</S.DescriptionDetail>
            </S.DescriptionBox>
            <S.FightingBox>즐거운 학교생활을 응원할게요!</S.FightingBox>
          </S.LeftDescriptionContainer>
          <S.RightDescriptionContainer>
            <S.GraphContainer>
              <S.DescriptionInfo>전공별 적성 그래프</S.DescriptionInfo>
              <S.GraphBox>
                {/* entries: [key, value] 쌍으로 이루어진 배열을 반환 */}
                {Object.entries(graph).map(([key, value]) => {
                  return (
                    <S.GraphItem key={key}>
                      <S.GraphBar $percent={value}></S.GraphBar>
                      <S.GraphLabel>{key}</S.GraphLabel>
                    </S.GraphItem>
                  );
                })}
              </S.GraphBox>
            </S.GraphContainer>
          </S.RightDescriptionContainer>
        </S.DescriptionContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default MajorResult;
