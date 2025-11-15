import * as S from './Major.style';
import MajorQuestionObject from '@/components/MajorQuestion/Object/MajorQuestionObject';
import MajorQuestionSubject from '@/components/MajorQuestion/Subject/MajorQuestionSubject';
import ProgressCircle from '@/components/ProgressCircle/ProgressCircle';
import type { MajorFormData } from '@/types/majorQuestions';
import { formatMajorFormData } from '@/utils/formatMajorFormData';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const randomMajorQuestions = getRandomObjectMajorQuestions();
  const randomSubjectQuestions = getRandomSubjectQuestions();

  const onSubmit = async (data: MajorFormData) => {
    setIsSubmitting(true);

    const selectedObjectIds = randomMajorQuestions.map((q) => q.id);
    const selectedSubjectIds = randomSubjectQuestions.map((q) => q.id);
    const formattedData = formatMajorFormData(
      data,
      selectedObjectIds,
      selectedSubjectIds,
    );

    // 서버 연동 전 임시 로딩
    console.log(formattedData);
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
        {randomMajorQuestions.map(({ id, question }, index) => (
          <MajorQuestionObject
            id={index + 1}
            key={id}
            question={question}
            register={register}
          />
        ))}
        {randomSubjectQuestions.map(({ id, question }, index) => (
          <MajorQuestionSubject
            id={index + 1}
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
