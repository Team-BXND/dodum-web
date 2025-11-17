import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Domember4 = () => {
    const location=useLocation();
    const [value,setValue]=useState([0,0,0,0]);
      const onChangeValue=(index:number,event:any)=>{
        const newValue=[...value];
        newValue[index]=event.target.value;
        setValue(newValue);
      }
    
    const { register, handleSubmit, formState: { errors },setError } = useForm();
    const navigate = useNavigate();
    const onValid = () => {
        if(value.join("")===String(location.state.code)){
            navigate("/login")
        } else {
            setError("certification",{message:"인증번호가 일치하지 않습니다."});
        }
    };

    return(
        <S.Background>
    <S.Card $height="32.5rem" onSubmit={handleSubmit(onValid)}>
        <S.TitleCover>
            <S.Dodum src="src/assets/image.png" alt="Dodum Logo"/>
            <S.Title>이메일 인증</S.Title>
        </S.TitleCover>
        <S.InputCover>
            <S.InputTitle>인증번호</S.InputTitle>
        <S.ErrorCover>
        <S.NumberCover>
            <S.Number {...register("certification",{required:"인증번호를 작성해주세요"})} style={errors.certification?.message ? {borderColor:"#FF3E3E"}:{}} onChange={(event) => onChangeValue(0, event)}></S.Number>
            <S.Number {...register("certification",{required:"인증번호를 작성해주세요"})} style={errors.certification?.message ? {borderColor:"#FF3E3E"}:{}} onChange={(event) => onChangeValue(1, event)}></S.Number>
            <S.Number {...register("certification",{required:"인증번호를 작성해주세요"})} style={errors.certification?.message ? {borderColor:"#FF3E3E"}:{}} onChange={(event) => onChangeValue(2, event)}></S.Number>
            <S.Number {...register("certification",{required:"인증번호를 작성해주세요"})} style={errors.certification?.message ? {borderColor:"#FF3E3E"}:{}} onChange={(event) => onChangeValue(3, event)}></S.Number>
        </S.NumberCover>
        <S.ErrorMessage>{errors.certification?.message?.toString()}</S.ErrorMessage>
        </S.ErrorCover>
        </S.InputCover>
        <S.ButtonCover>
                    <S.Button type="submit">로그인</S.Button>
                    <S.Button $bgColor="#747474" onClick={()=>navigate(-1)} type="button">뒤로가기</S.Button>
        </S.ButtonCover>
    </S.Card>
    </S.Background>
    )
}

export default Domember4;