import * as S from './Major.style';
import MajorQuestionObject from '@/components/MajorQuestion/Object/MajorQuestionObject';
import MajorQuestionSubject from '@/components/MajorQuestion/Subject/MajorQuestionSubject';
import ProgressCircle from '@/components/ProgressCircle/ProgressCircle';
import type { MajorFormData } from '@/types/majorQuestions';
import { getRandomObjectMajorQuestions, getRandomSubjectQuestions } from '@/utils/getRandomMajorQuestions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const Major = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<MajorFormData>({
    defaultValues: {
      object: {},
      subject: {},
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const randomMajorQuestions = getRandomObjectMajorQuestions();
  const randomSubjectQuestions = getRandomSubjectQuestions();

  const onSubmit = async (data: MajorFormData) => {
    setIsSubmitting(true);

    // 서버 연동 전 임시 로딩
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    navigate('/major/result');
  };

  return isSubmitting ? (
    <ProgressCircle isSubmitting={isSubmitting} />
  ) : (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <>
        <S.Title>
          <S.SubTitle>MBTI</S.SubTitle> 기반 전공 추천 서비스
        </S.Title>
        {randomMajorQuestions.map(({ id, question }) => (
          <MajorQuestionObject
            id={id}
            key={id}
            question={question}
            register={register}
          />
        ))}
        {randomSubjectQuestions.map(({ id, question }) => (
          <MajorQuestionSubject
            id={id}
            key={id}
            question={question}
            register={register}
          />
        ))}
        <S.Button type="submit">전공 추천 받기</S.Button>
      </>
    </S.Container>
  );
};

export default Major;
