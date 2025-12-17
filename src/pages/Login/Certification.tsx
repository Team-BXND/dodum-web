// import 
import * as S from "@/pages/Login/Login.style.ts"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { api } from "./api.ts";
import { useSignupStore } from "./SignupStore";

const Certification = () => {
    // 회원가입 스토어에서 데이터 가져오기
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

    // 여러가지 정의
    const navigate = useNavigate();
    const location=useLocation();
    const { register, handleSubmit, formState: { errors },setError} = useForm();

    // 인증번호 4자리 상태관리
    const [value,setValue]=useState([0,0,0,0]);
      const onChangeValue=(index:number,event:any)=>{
        const newValue=[...value];
        newValue[index]=event.target.value;
        setValue(newValue);
      }

    // 핸들러 정의(인증번호 확인 및 회원가입 요청)
    const onValid = () => {
            api.post("/auth/email/check",{
                email:location.state.email,
                authNum:value.join("")
            }).then((response)=>{
                if(response.data.data){

                 // 회원가입 요청 및 로그인 페이지 이동
                api.post("/auth/signup",SignupData)
                .then((response)=>{
                    navigate("/login");
                }).catch((error) => {
                setError("certification1", { message: "회원가입에 실패했습니다. 다시 시도해주세요." })})
                
                }
                else{
                    setError("certification1", { message: "인증번호가 일치하지 않습니다." })
                    return;
                }})
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