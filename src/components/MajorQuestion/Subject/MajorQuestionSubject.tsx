import * as S from './MajorQuestionSubject.style';
import type { MajorQuestionProps } from '@/types/majorQuestions';

const MajorQuestionSubject = ({
  question,
  id,
  register,
}: MajorQuestionProps) => {
  return (
    <S.Container>
      <S.Title>{question}</S.Title>
      <S.ResWrapper>
        <S.TextInput
          placeholder="텍스트 입력"
          {...register(`subject.${id}`, { required: true })}
        />
      </S.ResWrapper>
    </S.Container>
  );
};

export default MajorQuestionSubject;
