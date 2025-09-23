import * as S from './Major.style';
import { majroQuestions } from '@/constants/major.constants';
import MajorQuestion from '@/components/MajorQuestion/MajorQuestion';

function Major() {
  return (
    <S.Container>
      <S.Title>
        <S.SubTitle>MBTI</S.SubTitle> 기반 전공 추천 서비스
      </S.Title>
      {majroQuestions.map(({ id, question }) => (
        <MajorQuestion key={id} question={question} />
      ))}
    </S.Container>
  );
}

export default Major;
