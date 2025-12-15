import { objectMajorQuestions, subjectMajorQuestions } from '@/constants/major.constants';

export const getRandomObjectMajorQuestions = () => {
  const questions = [...objectMajorQuestions];

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, 16);
};

export const getRandomSubjectQuestions = () => {
  const questions = [...subjectMajorQuestions];

  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, 3);
};
