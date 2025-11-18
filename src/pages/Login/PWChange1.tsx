import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import {useForm } from "react-hook-form";
import { api } from "./api";
import { useNavigate } from "react-router-dom";
import {useState } from "react";
const PWChange1=()=>{
    const Server_address="https://heptagonal-king-subpleural.ngrok-free.dev/"
    const navigate=useNavigate();
    const [isCertified, setIsCertified] = useState(false);
    const [code, setCode] = useState("");
    const { register, handleSubmit, formState: { errors },watch,setError } = useForm();
    
    const onClick=()=>{
        if (!watch("email")) {
            setError("email",{message:"이메일을 입력해 주세요"});
            return;
        }
        api.post(Server_address,{
            email:watch("email")
        }).then((response)=>{
            if(response.data.success){
                setIsCertified(true);
                setCode(response.data.code);
            }
        })
    }

    const onValid=()=>{
        if(isCertified){
            if(code === watch("certification")){
                navigate("/pwchange2");
            }
            else{
                setError("certification",{message:"인증번호가 일치하지 않습니다."});
                return;
            }
        } else {
            setError("certification",{message:"인증번호를 발송해주세요."});
            return;
        }
    }
    return<S.Background>
        <S.Card $height="33.3rem" onSubmit={handleSubmit(onValid)}>
        <S.TitleCover>
            <S.Dodum src="src/assets/image.png" alt="Dodum Logo"/>
            <S.Title>비밀번호 찾기</S.Title>
        </S.TitleCover>
        <S.InputCover>
            <S.InputTitle>이메일</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="text" placeholder="이메일을 입력하세요." {...register("email",{required:"이메일을 입력해 주세요"})}/>
            <S.ErrorMessage>{errors?.email?.message?.toString()}</S.ErrorMessage>
            </S.ErrorCover>
            <S.InputTitle>인증번호</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="text" placeholder="인증번호를 입력하세요." {...register("certification",{required:"인증번호를 입력해 주세요"})}></S.Input>
            <S.certifi_Button type="button" onClick={onClick}>인증번호 발송</S.certifi_Button>
            <S.ErrorMessage>{errors?.certification?.message?.toString()}</S.ErrorMessage>
            </S.ErrorCover>
        </S.InputCover>
        <S.Button type="submit">다음</S.Button>
        </S.Card>
    </S.Background>
}


export default PWChange1;