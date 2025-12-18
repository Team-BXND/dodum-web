import * as S from './style';
import MajorQuestionObject from '@/components/MajorQuestion/Object';
import MajorQuestionSubject from '@/components/MajorQuestion/Subject';
import ProgressCircle from '@/components/ProgressCircle';
import { SERVER_URL } from '@/constants/api';
import type { MajorFormData } from '@/types/majorQuestions';

import {
  getRandomObjectMajorQuestions,
  getRandomSubjectQuestions,
} from '@/utils/getRandomMajorQuestions';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {privateInstance} from "@/api/axiosInstance.ts";

const Major = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    trigger,
  } = useForm<MajorFormData>({
    defaultValues: {
      object: {},
      subject: {},
    },
    // 처음 검증은 submit 시, 이후 폼이 변경될 때 마다 재검증
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // useMemo로 컴포넌트 마운트 시에만 질문 랜덤 선택
  const randomMajorQuestions = useMemo(
    () => getRandomObjectMajorQuestions(),
    [],
  );
  const randomSubjectQuestions = useMemo(() => getRandomSubjectQuestions(), []);

  const onSubmit = async (data: MajorFormData) => {
    setIsSubmitting(true);
    privateInstance
      .post(`${SERVER_URL}/major-ai/recommend`, {
        data,
      })
      .then((res) => {
        navigate('/major/result', { state: res.data });
      })
      .catch((err) => {
        alert(err.message);
        setIsSubmitting(false);
      });
  };

  const onError = async () => {
    // 필드 값 바뀔 때 마다 수동으로 재검증
    await trigger();
  };

  return isSubmitting ? (
    <ProgressCircle isSubmitting={isSubmitting} />
  ) : (
    <S.Container onSubmit={handleSubmit(onSubmit, onError)}>
      <S.Title>
        <S.SubTitle>MBTI</S.SubTitle> 기반 전공 추천 서비스
      </S.Title>
      {randomMajorQuestions.map(({ id, question }) => (
        <MajorQuestionObject
          id={id}
          key={id}
          question={question}
          register={register}
          errors={errors}
          isSubmitted={isSubmitted}
        />
      ))}
      {randomSubjectQuestions.map(({ id, question }) => (
        <MajorQuestionSubject
          id={id}
          key={id}
          question={question}
          register={register}
          errors={errors}
          isSubmitted={isSubmitted}
        />
      ))}
      <S.Button type="submit">전공 추천 받기</S.Button>
    </S.Container>
  );
};

export default Major;