import * as S from "../../components/Auth/Auth.style"
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";

export type RegisterType = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  grade: number;
  class: number;
  studentNumber: number;
  phone: number;
}

function Register() {
  const methods = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = methods.watch((value) => {
      sessionStorage.setItem('dodum-signup-form', JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  return (
    <ThemeProvider theme={lightTheme}>
      <FormProvider {...methods}>
        <GlobalStyle />
        <S.Container>
          <S.Modal>
            <S.DodumLogo />
            <Outlet />
          </S.Modal>
        </S.Container>
      </FormProvider>
    </ThemeProvider>
  )
}

export default Register;