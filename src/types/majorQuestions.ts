import type { UseFormRegister } from 'react-hook-form';

export interface MajorFormData {
  [key: string]: string;
}

export interface MajorQuestionProps {
  question: string;
  id: number;
  register: UseFormRegister<MajorFormData>;
}
