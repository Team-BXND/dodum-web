import { create } from "zustand";
type SignupFields={
    "username":string
    "Password":string
    "grade":number
    "class_no":number
    "student_no":number
    "phone":string
    "email":string
    "major":string
    "history":string
    setSignup:(data:Partial<SignupStoreType>)=>void;
}

type SignupStoreType = SignupFields & {
    setSignup: (data: Partial<SignupFields>) => void;
  };

export const useSignupStore = create<SignupStoreType>((set) => ({
    username: "",
    Password: "",
    grade: 0,
    class_no: 0,
    student_no: 0,
    phone: "",
    email: "",
    major: "",
    history: "",
    setSignup: (data) =>
      set((state) => ({
        ...state,
        ...data,
      })),
  }));