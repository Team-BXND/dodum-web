import React from "react";
import * as S from "./input.style";
import { forwardRef } from "react";
interface InputProps {
  fontsize?: string;
  fontweight?: string;
  placeholder: string;
  register?: (name: string, options: { required: string }) => any;
  name?: string;
  error?: { message?: string };
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    fontsize,
    fontweight,
    placeholder,
    error,
  }, ref) => {
    return (
      <S.ErrorCover>
        <S.Input
          ref={ref}
          style={error?.message ? { fontSize: fontsize, fontWeight: fontweight, borderColor: "#FF3E3E" } : { fontSize: fontsize, fontWeight: fontweight }}
          placeholder={placeholder}
        />
  
        <S.Errortext>{error?.message}</S.Errortext>
      </S.ErrorCover>
    );
  });
  

export default Input;