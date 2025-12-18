import ButtonLong from "../../../components/Buttons/ButtonLong.tsx";
import * as S from "../Steps.style.ts"
import * as Text from "@/components/Text/Text.tsx"
import { useRef, useState } from "react";
import { publicInstance } from "@/api/axiosInstance.ts";

function EmailVerify() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const registerData = JSON.parse(sessionStorage.getItem('dodum-signup-form') || '{}');

  const handleRegister = () => {
    publicInstance.post(`/auth/signup`, {
      username: registerData.id,
      password: registerData.password,
      grade: parseInt(registerData.grade),
      class_no: parseInt(registerData.class),
      student_no:parseInt(registerData.studentNumber),
      phone: registerData.phone,
      email: registerData.email,
      // major: "",
      // history: "",
      // club: "NONE",
    })
    .then(() => {
      sessionStorage.removeItem('dodum-signup-form');
      alert("회원가입에 성공했습니다.")
      window.location.replace("/login");
    })
    .catch((error) => {
      alert(`회원가입에 실패했습니다. ${error.response.data.error.message} ${error.response.data.status === 409 ? "\n아이디 또는 이메일 변경 후 다시 시도해주세요." : ""}`);
      window.location.replace("/register/greeting");
    })
  }

  const handleNext = async () => {
    const isValid = inputs.filter((elem) => {
      return elem.length !== 0
    }).length === 6;

    if(isValid) {
      publicInstance.post(`/auth/email/check`, {
        email: registerData.email,
        authNum: inputs.join("")
      })
      .then(() => {
        alert("이메일 인증에 성공했습니다.")
        handleRegister();
      })
      .catch(() => {
        alert("이메일 인증에 실패했습니다. 잠시 후 다시 시도해주세요.")
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    
    if (!/^[0-9]*$/.test(val)) return;

    const newInputs = [...inputs];
    newInputs[index] = val;
    setInputs(newInputs);

    if (val.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !inputs[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <S.Container>
      <Text.Title>이메일 인증</Text.Title>
      <S.FormContainer>
        <S.InputConatiner>
          <Text.Caption>4자리 인증번호를 입력하세요.</Text.Caption>
          <S.RowContainer>
            {inputs.map((value, index) => (
              <S.RowInput
                key={index}
                value={value}
                maxLength={1}
                ref={(el) => { inputRefs.current[index] = el }}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </S.RowContainer>
        </S.InputConatiner>
      </S.FormContainer>
      <ButtonLong text="인증하기" onClick={handleNext} />
    </S.Container>
  )
}

export default EmailVerify;