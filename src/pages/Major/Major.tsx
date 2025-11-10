import * as S from './Major.style';
import MajorQuestion from '@/components/MajorQuestion/MajorQuestion';
import type { MajorFormData } from '@/types/majorQuestions';
import { getRandomMajorQuestions } from '@/utils/getRandomMajorQuestions';
import { useForm } from 'react-hook-form';

const Major = () => {
  const { register, handleSubmit } = useForm<MajorFormData>();
  const randomMajorQuestions = getRandomMajorQuestions();

  const onSubmit = (data: MajorFormData) => {
    console.log(data);
    // 전공 추천 로직 추가
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <S.Title>
        <S.SubTitle>MBTI</S.SubTitle> 기반 전공 추천 서비스
      </S.Title>
      {randomMajorQuestions.map(({ id, question }) => (
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
};

export default Major;
