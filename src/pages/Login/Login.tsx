import * as S from "/Users/ghkdrudals/Desktop/프로그래밍/WEB/dodum-web-login/src/pages/Login/Login.style.ts"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
const Login=() => {
    const { register, handleSubmit, formState: { errors },watch,setError} = useForm();
      const navigate=useNavigate();
    const onValid=()=>{
      axios.post("https://heptagonal-king-subpleural.ngrok-free.dev/login",{
        username:watch("username"),
        Password:watch("Password")
      }).then((response)=>{
        if(response.data.success){
        } else {
            setError("Password",{message:"아이디 또는 비밀번호가 일치하지 않습니다."})
            setError("username",{message:""})
        }
      })}
    return<S.Background>
        <S.Card onSubmit={handleSubmit(onValid)}>
            <S.TitleCover>
            <S.Dodum src="src/assets/image.png" alt="Dodum Logo"/>
            <S.Title>환영합니다!</S.Title>
            <S.Caption>대소고 입학을 축하합니다!</S.Caption>
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
                <S.LinkCover>
                    <S.ForgetPassword>비밀번호를 잊으셨나요?</S.ForgetPassword>
                    <Link to="/domember2"><S.ForgetPassword>회원가입</S.ForgetPassword></Link>
                </S.LinkCover>
            </S.InputCover>
            <S.Button type="submit">로그인</S.Button>
        </S.Card>
    </S.Background>
}

export default Login;