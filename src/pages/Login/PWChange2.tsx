import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import {useForm } from "react-hook-form";
import axios from "axios";
const PWChange2=()=>{
    const { register, handleSubmit, formState: { errors },watch,setError } = useForm();
    const onValid=()=>{
        if (watch("pw")!==watch("pwcheck")){
            setError("pwcheck",{message:"비밀번호가 일치하지 않아요."})
            return;
        }
        axios.post("https://heptagonal-king-subpleural.ngrok-free.dev/",{
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
            <S.Input type="text" placeholder="새로운 비밀번호" {...register("pw",{required:"비밀번호를 입력해주세요"})}/>
            <S.ErrorMessage></S.ErrorMessage>
            </S.ErrorCover>
            <S.InputTitle>비밀번호 확인</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="text" placeholder="비밀번호 확인" {...register("pwcheck",{required:"비밀번호를 입력해주세요"})}></S.Input>
            <S.ErrorMessage></S.ErrorMessage>
            </S.ErrorCover>
        </S.InputCover>
        <S.Button type="submit">다음</S.Button>
        </S.Card>
    </S.Background>
}


export default PWChange2;