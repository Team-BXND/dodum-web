import * as S from "@/pages/Login/Login.style.ts"
import {useForm } from "react-hook-form";
import { api } from "./api";
import { useLocation } from "react-router-dom";
const PWChange2=()=>{
    const location=useLocation();
    const { register, handleSubmit, formState: { errors },watch,setError } = useForm();
    const onValid=()=>{
        if (watch("pw")!==watch("pwcheck")){
            setError("pwcheck",{message:"비밀번호가 일치하지 않아요."})
            return;
        }
        api.post("/auth/pwchage",{
            email:location.state.email,
            new_password:watch("pw"),
            passwordCheck:watch("pwcheck")
        })
    }
    return<S.Background>
        <S.Card $height="33.3rem" onSubmit={handleSubmit(onValid)}>
        <S.TitleCover>
            <S.Dodum src="src/assets/image.png" alt="Dodum Logo"/>
            <S.Title>비밀번호 찾기</S.Title>
        </S.TitleCover>
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
        </S.Card>
    </S.Background>
}


export default PWChange2;