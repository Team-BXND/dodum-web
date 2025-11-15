import type { UseFormRegister } from 'react-hook-form';

export interface MajorFormData {
  // Record<key, value>객체 형태 타입 { "1": 3, "2": 5 }
  object: Record<string, number>;
  subject: Record<string, string>;
}

export interface MajorQuestionProps {
  question: string;
  id: number;
  register: UseFormRegister<MajorFormData>;
}
