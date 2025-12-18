import { GlobalStyle } from "@/styles/GlobalStyle";
import {type SubmitHandler, useForm} from "react-hook-form";
import { ThemeProvider } from "styled-components";
import * as S from "@/components/Auth/Auth.style";
import { lightTheme } from "@/styles/theme";
import * as Form from "./Login.style"
import ButtonLong from "@/components/Buttons/ButtonLong";
import { Body, Caption, Title } from "@/components/Text/Text";
import { publicInstance } from "@/api/axiosInstance";
import { setAccessToken, setRefreshToken, setUsername } from "@/utils/cookie";

// 입력 데이터 타입 정의
interface LoginInputs {
  username: string;
  password: string;
}

function Login() {
  const { watch, register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = () => {
    publicInstance.post(`/auth/signin`, {
      username: watch("username"),
      password: watch("password")
    })
      .then((response) => {
        setAccessToken(response.data.data.accessToken)
        setRefreshToken(response.data.data.refreshToken)
        setUsername(watch("username"))
        window.location.replace('/')
      })
      .catch((error) => {
        alert(error.response.message)
      })
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <S.Container>
        <S.Modal>
          <S.TitleContainer>
            <S.DodumLogo />
            <Title>환영합니다!</Title>
            <Body>대소고 입학을 축하합니다</Body>
          </S.TitleContainer>
          <Form.form onSubmit={handleSubmit(onSubmit)}>
            <S.FormContainer>
              <S.InputConatiner>
                <Caption>아이디</Caption>
                <S.Input
                  type="text"
                  placeholder="아이디"
                  {...register("username", {
                    required: "아이디을 입력해주세요.",
                  })}
                />
                <S.Error>{errors.username && <span>{errors.username.message}</span>}</S.Error>
              </S.InputConatiner>

              <S.InputConatiner>
                <Caption>비밀번호</Caption>
                <S.Input
                  type="password"
                  placeholder="비밀번호"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요.",
                  })}
                />
                <S.Error>{errors.password && <span>{errors.password.message}</span>}</S.Error>
              </S.InputConatiner>
              <ButtonLong text="로그인" type={"submit"} />
            </S.FormContainer>
          </Form.form>
        </S.Modal>
      </S.Container>
    </ThemeProvider>
  )
}

export default Login;