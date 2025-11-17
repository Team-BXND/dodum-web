import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import { useForm } from "react-hook-form";
import axios from "axios";
const PWChange1=()=>{
    const { register, handleSubmit, formState: { errors },watch } = useForm();
    const onValid=()=>{
        axios.post("https://heptagonal-king-subpleural.ngrok-free.dev/",{

        })
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
            <S.Input type="text" placeholder="이메일을 입력하세요." {...register}/>
            <S.ErrorMessage></S.ErrorMessage>
            </S.ErrorCover>
            <S.InputTitle>인증번호</S.InputTitle>
            <S.ErrorCover>
            <S.Input type="text" placeholder="인증번호를 입력하세요."></S.Input>
            <S.certifi_Button>인증번호 발송</S.certifi_Button>
            <S.ErrorMessage></S.ErrorMessage>
            </S.ErrorCover>
        </S.InputCover>
        <S.Button type="submit">다음</S.Button>
        </S.Card>
    </S.Background>
}


export default PWChange1;