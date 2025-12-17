// import
import * as S from "@/pages/Login/Login.style.ts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "./api.ts";

const Login = () => {
  //react-hook-form 정의
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  // 네비게이트 정의
  const navigate = useNavigate();

  // 핸들러 정의(로그인 처리)
  const onValid = () => {
    api
      .post("/auth/signin", {
        username: watch("username"),
        Password: watch("Password"),
      })
      .then((response) => {
        if (response.data.data) {
          const { accessToken, refreshToken } = response.data.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
        } else {
          setError("Password", {
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
          setError("username", { message: "" });
        }
      });
  };

  return (
    <S.Background>
      <S.Card onSubmit={handleSubmit(onValid)}>
        <S.TitleCover>
          <S.Dodum src="src/assets/image.png" alt="Dodum Logo" />
          <S.Title>환영합니다!</S.Title>
          <S.Caption>대소고 입학을 축하합니다!</S.Caption>
        </S.TitleCover>

        <S.InputCover>
          <S.InputTitle>아이디</S.InputTitle>
          <S.ErrorCover>
            <S.Input
              type="text"
              placeholder="아이디를 입력해주세요."
              {...register("username", {
                required: "아이디를 작성하여 주세요",
              })}
              $hasError={errors.username ? true : false}
            />
            <S.ErrorMessage>
              {errors.username?.message?.toString()}
            </S.ErrorMessage>
          </S.ErrorCover>

          <S.InputTitle>비밀번호</S.InputTitle>
          <S.ErrorCover>
            <S.Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("Password", {
                required: "비밀번호를 작성하여 주세요",
              })}
              $hasError={errors.Password ? true : false}
            />
            <S.ErrorMessage>
              {errors.Password?.message?.toString()}
            </S.ErrorMessage>
          </S.ErrorCover>
          
          <S.LinkCover>
            <S.ForgetPassword>비밀번호를 잊으셨나요?</S.ForgetPassword>
            <Link to="/member/pwchange1">
              <S.ForgetPassword>회원가입</S.ForgetPassword>
            </Link>
          </S.LinkCover>
        </S.InputCover>

        <S.ButtonCover>
        <S.Button type="submit">로그인</S.Button>
        </S.ButtonCover>
      </S.Card>
    </S.Background>
  );
};

export default Login;
