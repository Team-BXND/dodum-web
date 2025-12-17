// import
import * as S from "@/pages/Login/Login.style.ts";
import { useForm } from "react-hook-form";
import { api } from "./api.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PWChange1 = () => {
  // 여러 요소 정의
  const navigate = useNavigate();
  const [isCertified, setIsCertified] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  // 핸들러 정의(인증번호 발송)
  const onClick = () => {
    if (!watch("email")) {
      setError("email", { message: "이메일을 입력해 주세요" });
      return;
    }
    // 인증번호 발송 요청
    api
      .post("/auth/email/send", {
        email: watch("email"),
      })
      .then((response) => {
        if (response.data.data) {
          setIsCertified(true);
        }
        else {
          alert("인증번호 발송에 실패했습니다. 다시 시도해주세요.");
        }
      });
  };

  // 핸들러 정의(인증번호 확인 및 다음 페이지 이동)
  const onValid = () => {
    if (isCertified) {
      api.post("/auth/email/check", {
        email: watch("email"),
        authNum: watch("certification"),
      }).then((response) => {

        // 인증번호 일치 시 다음 페이지로 이동
        if (response.data.data) {
          navigate("/member/pwchange2", { state: { email: watch("email") } });
        } else {
          setError("certification", {
            message: "인증번호가 일치하지 않습니다.",
          });
      }});

      } else {
        setError("certification", {
          message: "인증번호를 발송해주세요.",
        });
      }
    }
    
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <S.InputCover>
        <S.InputTitle>이메일</S.InputTitle>
        <S.ErrorCover>
          <S.Input
            type="text"
            placeholder="이메일을 입력하세요."
            {...register("email", { required: "이메일을 입력해 주세요" })}
            $hasError={errors.email ? true : false}
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
            $hasError={errors.certification ? true : false}
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
