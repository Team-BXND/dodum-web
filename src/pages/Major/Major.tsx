import * as S from './Major.style';
import MajorQuestion from '@/components/MajorQuestion/MajorQuestion';
import { majorQuestions } from '@/constants/major.constants';
import type { MajorFormData } from '@/types/majorQuestions';
import { useForm } from 'react-hook-form';

function Major() {
  const { register, handleSubmit } = useForm<MajorFormData>();

  const onSubmit = (data: MajorFormData) => {
    console.log(data);
    // 전공 추천 로직 추가
  };
  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        <S.SubTitle>MBTI</S.SubTitle> 기반 전공 추천 서비스
      </S.Title>
      {majorQuestions.map(({ id, question }) => (
        <MajorQuestion
          id={id}
          key={id}
          question={question}
          register={register}
        />
      ))}
      <S.Button type="submit">전공 추천 받기</S.Button>
    </S.Container>
  );
}

export default Major;
