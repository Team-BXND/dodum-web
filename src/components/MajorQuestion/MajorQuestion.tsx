import * as S from './MajorQuestion.style';
import type { MajorQuestionProps } from '@/types/majorQuestions';

function MajorQuestion({ question }: MajorQuestionProps) {
  return (
    <S.Container>
      <S.Title>{question}</S.Title>
      <S.ResWrapper>
        <S.SubTitle>매우 그렇지 않다</S.SubTitle>
        <S.CircleBox>
          <S.OutCircle />
          <S.Circle />
          <S.MiddleCircle />
          <S.Circle />
          <S.OutCircle />
        </S.CircleBox>
        <S.SubTitle>매우 그렇다</S.SubTitle>
      </S.ResWrapper>
    </S.Container>
  );
}

export default MajorQuestion;
