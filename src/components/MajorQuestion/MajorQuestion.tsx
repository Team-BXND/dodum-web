import * as S from './MajorQuestion.style';
import type { MajorQuestionProps } from '@/types/majorQuestions';

function MajorQuestion({ question, id, register }: MajorQuestionProps) {
  const circleComponents = [
    S.OutCircle,
    S.Circle,
    S.MiddleCircle,
    S.Circle,
    S.OutCircle,
  ];

  return (
    <S.Container>
      <S.Title>{question}</S.Title>
      <S.ResWrapper>
        <S.SubTitle>매우 그렇지 않다</S.SubTitle>
        <S.CircleBox>
          {[1, 2, 3, 4, 5].map((value, index) => {
            const CircleComponent = circleComponents[index];
            return (
              <CircleComponent
                key={value}
                value={value}
                {...register(`question_${id}`, { required: true })}
                name={`question_${id}`}
              />
            );
          })}
        </S.CircleBox>
        <S.SubTitle>매우 그렇다</S.SubTitle>
      </S.ResWrapper>
    </S.Container>
  );
}

export default MajorQuestion;
