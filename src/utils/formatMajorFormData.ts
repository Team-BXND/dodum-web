import type { MajorFormData } from '@/types/majorQuestions';

const TOTAL_OBJECT_QUESTIONS = 48;
const TOTAL_SUBJECT_QUESTIONS = 10;

export const formatMajorFormData = (
  data: MajorFormData,
  selectedObjectIds: number[],
  selectedSubjectIds: number[],
) => {
  const formattedData = {
    object: {} as Record<string, number | null>,
    subject: {} as Record<string, string | null>,
  };

  // 모든 질문을 null로 초기화
  for (let i = 1; i <= TOTAL_OBJECT_QUESTIONS; i++) {
    formattedData.object[i] = null;
  }
  for (let i = 1; i <= TOTAL_SUBJECT_QUESTIONS; i++) {
    formattedData.subject[i] = null;
  }

  // 랜덤으로 뽑힌 질문에 대한 답변만 값을 채워넣기
  selectedObjectIds.forEach((questionId, index) => {
    const answerKey = (index + 1).toString();
    formattedData.object[questionId] = data.object[answerKey] || null;
  });

  selectedSubjectIds.forEach((questionId, index) => {
    const answerKey = (index + 1).toString();
    formattedData.subject[questionId] = data.subject[answerKey] || null;
  });

  return formattedData;
};
