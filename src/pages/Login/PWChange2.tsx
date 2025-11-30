import * as S from "@/pages/Login/Login.style.ts"
import {useForm } from "react-hook-form";
import { api } from "./api.ts";
import { useLocation } from "react-router-dom";
const PWChange2=()=>{
    const location=useLocation();
    const { register, handleSubmit, formState: { errors },watch,setError } = useForm();
    const onValid=()=>{
        if (watch("pw")!==watch("pwcheck")){
            setError("pwcheck",{message:"비밀번호가 일치하지 않아요."})
            return;
        }
        api.post("/auth/pwchange",{
            email:location.state.email,
            new_password:watch("pw"),
            passwordCheck:watch("pwcheck")
        })
    }
    return<form>
        <S.InputCover>
            <S.InputTitle>비밀번호 재설정</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="password" placeholder="새로운 비밀번호" {...register("pw",{required:"비밀번호를 입력해주세요"})}/>
            <S.ErrorMessage>{errors?.pw?.message?.toString()}</S.ErrorMessage>
            </S.ErrorCover>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="password" placeholder="비밀번호 확인" {...register("pwcheck",{required:"비밀번호를 입력해주세요"})}></S.Input>
            <S.ErrorMessage>{errors?.pwcheck?.message?.toString()}</S.ErrorMessage>
            </S.ErrorCover>
        </S.InputCover>
        <S.Button type="submit">다음</S.Button>
        </form>
}


export default PWChange2;