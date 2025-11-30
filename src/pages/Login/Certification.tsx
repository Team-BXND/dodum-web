import * as S from "@/pages/Login/Login.style.ts"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { api } from "./api.ts";
import { useSignupStore } from "./SignupStore";
const Certification = () => {
    const {username,
        Password,
        grade,
        class_no,
        student_no,
        phone,
        email,
        major,
        history,}=useSignupStore();
        
    const SignupData={
        username,
        Password,
        grade,
        class_no,
        student_no,
        phone,
        email,
        major,
        history,
    }

    const navigate = useNavigate();
    const location=useLocation();
    const state = location.state as { code?: string } | null;
    if (!state?.code) {
        navigate("/domember3");
        return;
      }
    const [value,setValue]=useState([0,0,0,0]);
      const onChangeValue=(index:number,event:any)=>{
        const newValue=[...value];
        newValue[index]=event.target.value;
        setValue(newValue);
      }
    
    const { register, handleSubmit, formState: { errors },setError,control } = useForm();
    const onValid = () => {
        if(value.join("")===String(location.state.code)){
            api.post("/auth/email/check",{
                email:location.state.email,
                authNum:location.state.code
            })
            navigate("/login")
        api.post("/auth/signup",SignupData)
        } else {
            setError("certification1",{message:"인증번호가 일치하지 않습니다."});
        }
    };

    return(
        <form onSubmit={handleSubmit(onValid)}>
        <S.InputCover>
            <S.InputTitle>인증번호</S.InputTitle>
        <S.ErrorCover>
        <S.NumberCover>
            <S.Number {...register("certification1",{required:"인증번호를 작성해주세요", onChange: (e) => onChangeValue(0, e)})} style={errors.certification1?.message ? {borderColor:"#FF3E3E"}:{}} maxLength={1}></S.Number>
            <S.Number {...register("certification2",{required:"인증번호를 작성해주세요", onChange: (e) => onChangeValue(1, e)})} style={errors.certification1?.message ? {borderColor:"#FF3E3E"}:{}} maxLength={1}></S.Number>
            <S.Number {...register("certification3",{required:"인증번호를 작성해주세요",onChange: (e) => onChangeValue(2, e)})} style={errors.certification1?.message ? {borderColor:"#FF3E3E"}:{}} maxLength={1}></S.Number>
            <S.Number {...register("certification4",{required:"인증번호를 작성해주세요",onChange: (e) => onChangeValue(3, e)})} style={errors.certification1?.message ? {borderColor:"#FF3E3E"}:{}} maxLength={1}></S.Number>
        </S.NumberCover>
        <S.ErrorMessage>{errors.certification1?.message?.toString()}</S.ErrorMessage>
        </S.ErrorCover>
        </S.InputCover>
        <S.ButtonCover>
                    <S.Button type="submit">로그인</S.Button>
                    <S.Button $bgColor="#747474" onClick={()=>navigate(-1)} type="button">뒤로가기</S.Button>
        </S.ButtonCover>
        </form>
    )
}

export default Certification;