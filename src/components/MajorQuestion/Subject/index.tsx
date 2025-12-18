import * as S from './style';
import type { MajorQuestionProps } from '@/types/majorQuestions';

const MajorQuestionSubject = ({
  question,
  id,
  register,
  errors,
  isSubmitted,
}: MajorQuestionProps) => {
  const hasError = isSubmitted && !!errors.subject?.[id];

  return (
    <S.Container $hasError={hasError}>
      <S.Title>{question}</S.Title>
      <S.ResWrapper>
        <S.TextInput
          placeholder="텍스트 입력"
          $hasError={hasError}
          {...register(`subject.${id}`, { required: true })}
        />
      </S.ResWrapper>
    </S.Container>
  );
};

export default MajorQuestionSubject;
