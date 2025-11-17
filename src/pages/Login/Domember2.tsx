import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Domember2=() => {
    const { register, handleSubmit, formState: { errors },setError,watch } = useForm();
    const navigate=useNavigate();
    const onValid=(data:any)=>{
        if(data.password!==data.passwordcheck){
            setError("passwordcheck",{message:"비밀번호가 일치하지 않아요."})
        }
        else{
            axios.post("https://heptagonal-king-subpleural.ngrok-free.dev/",{
                username:watch("username"),
                password:watch("Password")
              }).then((response)=>{})
            navigate("/domember3");
        }
    }
    return<S.Background>
        <S.Card onSubmit={handleSubmit(onValid)} $height="40.5rem">
            <S.TitleCover>
            <S.Dodum src="src/assets/image.png" alt="Dodum Logo"/>
            <S.Title>환영합니다!</S.Title>
            </S.TitleCover>
            <S.InputCover>
                <S.InputTitle>아이디</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="아이디를 입력해주세요." {...register("username",{required:"아이디를 작성하여 주세요"})} style={errors.username?.message ? { borderColor: "#FF3E3E" } : {borderColor:"#9B9B9B"}} $placeholderColor={errors.username?.message ? "#FF3E3E":undefined}/>
                <S.ErrorMessage>{errors.username?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>비밀번호</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="비밀번호를 입력해주세요." {...register("Password",{required:"비밀번호를 작성하여 주세요"})} style={errors.Password?.message ? { borderColor: "#FF3E3E" } : {borderColor:"#9B9B9B"}} $placeholderColor={errors.Password?.message ? "#FF3E3E":undefined}/>
                <S.ErrorMessage>{errors.Password?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
                <S.InputTitle>비밀번호 확인</S.InputTitle>
                <S.ErrorCover>
                <S.Input type="text" placeholder="비밀번호를 입력해주세요." {...register("passwordcheck",{required:"비밀번호를 작성하여 주세요"})} style={errors.passwordcheck?.message ? { borderColor: "#FF3E3E" } : {borderColor:"#9B9B9B"}} $placeholderColor={errors.passwordcheck?.message ? "#FF3E3E":undefined}/>
                <S.ErrorMessage>{errors.passwordcheck?.message?.toString()}</S.ErrorMessage>
                </S.ErrorCover>
            </S.InputCover>
            <S.Button type="submit">다음으로</S.Button>
        </S.Card>
    </S.Background>
}

export default Domember2;