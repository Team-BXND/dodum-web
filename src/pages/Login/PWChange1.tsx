import * as S from "@/pages/Login/Login.style.ts";
import { useForm } from "react-hook-form";
import { api } from "./api.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const PWChange1 = () => {
  const navigate = useNavigate();
  const [isCertified, setIsCertified] = useState(false);
  const [code, setCode] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const onClick = () => {
    if (!watch("email")) {
      setError("email", { message: "이메일을 입력해 주세요" });
      return;
    }
    api
      .post("/auth/email/send", {
        email: watch("email"),
      })
      .then((response) => {
        if (response.data.success) {
          setIsCertified(true);
          setCode(response.data.code);
        }
      });
  };

  const onValid = () => {
    if (isCertified) {
      if (code === watch("certification")) {
        navigate("/pwchange2", { state: { email: watch("email") } });
      } else {
        setError("certification", { message: "인증번호가 일치하지 않습니다." });
        return;
      }
    } else {
      setError("certification", { message: "인증번호를 발송해주세요." });
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.InputCover>
        <S.InputTitle>이메일</S.InputTitle>
        <S.ErrorCover>
          <S.Input
            type="text"
            placeholder="이메일을 입력하세요."
            {...register("email", { required: "이메일을 입력해 주세요" })}
          />
          <S.ErrorMessage>{errors?.email?.message?.toString()}</S.ErrorMessage>
        </S.ErrorCover>
        <S.InputTitle>인증번호</S.InputTitle>
        <S.ErrorCover>
          <S.Input
            type="text"
            placeholder="인증번호를 입력하세요."
            {...register("certification", {
              required: "인증번호를 입력해 주세요",
            })}
          ></S.Input>
          <S.certifi_Button type="button" onClick={onClick}>
            인증번호 발송
          </S.certifi_Button>
          <S.ErrorMessage>
            {errors?.certification?.message?.toString()}
          </S.ErrorMessage>
        </S.ErrorCover>
      </S.InputCover>
      <S.Button type="submit">다음</S.Button>
    </form>
  );
};

export default PWChange1;
