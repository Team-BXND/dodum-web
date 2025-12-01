import React from "react";
import * as S from "./input.style";
interface InputProps {
  fontsize?: string;
  fontweight?: string;
  placeholder: string;
  register?: (name: string, options: { required: string }) => any;
  name?: string;
  error?: { message?: string };
}

const Input: React.FC<InputProps> = ({
    fontsize,
    fontweight,
    placeholder,
    register,
    name,
    error,
  }) => {
    const hasRegister = register && name;
  
    return (
      <S.ErrorCover>
        <S.Input
          style={error?.message ? { fontSize: fontsize, fontWeight: fontweight, borderColor: "#FF3E3E" } : { fontSize: fontsize, fontWeight: fontweight }}
          placeholder={placeholder}
          {...(hasRegister
            ? register(name, {
                required: `${placeholder}를 입력해주세요`,
              })
            : {})}
        />
  
        <S.Errortext>{error?.message}</S.Errortext>
      </S.ErrorCover>
    );
  };
  

export default Input;