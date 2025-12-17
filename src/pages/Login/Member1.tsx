// import
import * as S from "@/pages/Login/Login.style.ts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignupStore } from "@/pages/Login/SignupStore.tsx";

const Member1=() => {
    // 타입 정의
    interface FormData {
        username: string;
        Password: string;
        Passwordcheck: string;
    }

    // 여러가지 정의
    const {username,Password,setSignup}=useSignupStore();
    const { register, handleSubmit, formState: { errors },setError,watch } = useForm<FormData>();
    const navigate=useNavigate();

    // 핸들러 정의(비밀번호 유효성 검사)
    const onValid=(data: { Password: string; Passwordcheck: string })=>{
        if(data.Password!==data.Passwordcheck){
            setError("Passwordcheck",{message:"비밀번호가 일치하지 않아요."})
            return
        }
        else{
            setSignup({username:watch("username") as string, Password:watch("Password") as string});
            navigate("/member/member2");
        }
    }
    
    return<form onSubmit={handleSubmit(onValid)}>
            <S.InputCover>
                <S.InputTitle>아이디</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="아이디를 입력해주세요." {...register("username",{required:"아이디를 작성하여 주세요"})}  $hasError={errors.username ? true : false}/>
                <S.ErrorMessage>{errors.username?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>비밀번호</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="password" placeholder="비밀번호를 입력해주세요." {...register("Password",{required:"비밀번호를 작성하여 주세요"})}  $hasError={errors.Password ? true : false}/>
                <S.ErrorMessage>{errors.Password?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>비밀번호 확인</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="password" placeholder="비밀번호를 입력해주세요." {...register("Passwordcheck",{required:"비밀번호를 작성하여 주세요"})} $hasError={errors.Passwordcheck ? true : false}/>
                <S.ErrorMessage>{errors.Passwordcheck?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
            </S.InputCover>
            <S.ButtonCover>
            <S.Button type="submit">다음으로</S.Button>
            </S.ButtonCover>
            </form>
}

export default Member1;