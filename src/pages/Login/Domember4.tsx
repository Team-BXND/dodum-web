import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Domember4 = () => {
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
            navigate("/login")
        } else {
            setError("certification1",{message:"인증번호가 일치하지 않습니다."});
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
    </S.Card>
    </S.Background>
    )
}

export default Domember4;