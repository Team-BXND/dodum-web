// import
import * as S from "@/pages/Login/Login.style.ts";
import { useForm } from "react-hook-form";
import { api } from "./api.ts";
import { useLocation } from "react-router-dom";

const PWChange2 = () => {
  //여러 요소 정의
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  //핸들러 정의(비밀번호 변경 요청)
  const onValid = () => {
    if (watch("Password") !== watch("Passwordcheck")) {
      setError("pwcheck", { message: "비밀번호가 일치하지 않아요." });
      return;
    }

    // 비밀번호 변경 요청
    api
      .put("/auth/pwchange", {
        email: location.state.email,
        newPassword: watch("Password"),
        passwordCheck: watch("Passwordcheck"),
      })

      .then((response) => {
        if (response.data.status === 200) {
          window.location.href = "/member/login";
        } else {
          setError("Password", {
            message: "비밀번호 변경에 실패했습니다. 다시 시도해주세요.",
          });
        }
      })

      .catch(() => {
        setError("Password", {
          message: "서버 오류로 비밀번호를 변경하지 못했습니다.",
        });
      });
  };
  
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.InputCover>
        <S.InputTitle>비밀번호 재설정</S.InputTitle>
        <S.ErrorCover>
          <S.Input
            type="password"
            placeholder="새로운 비밀번호"
            {...register("Password", { required: "비밀번호를 입력해주세요" })}
            $hasError={errors.Password ? true : false}
          />
          <S.ErrorMessage>{errors?.pw?.message?.toString()}</S.ErrorMessage>
        </S.ErrorCover>
        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.ErrorCover>
          <S.Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("Passwordcheck", { required: "비밀번호를 입력해주세요" })}
            $hasError={errors.Passwordcheck ? true : false}
          ></S.Input>
          <S.ErrorMessage>
            {errors?.pwcheck?.message?.toString()}
          </S.ErrorMessage>
        </S.ErrorCover>
      </S.InputCover>
      <S.Button type="submit">다음</S.Button>
    </form>
  );
};

export default PWChange2;
