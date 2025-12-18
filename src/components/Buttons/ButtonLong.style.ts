import styled from "styled-components";

type ButtonProps = {
  isGray?: boolean;
}

export const Container = styled.button<ButtonProps>`
  min-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 80px;
  color: #fff;
  border-radius: 8px;
  border: 0;
  font-size: 20px;
  background-color: ${(props) => {
    if (props.isGray) {
      return props.theme.btnGrayPrimary;
    } else {
      return props.theme.btnPrimary;
    }
  }};
  &:hover {
    background-color: ${(props) => {
      if (props.isGray) {
        return props.theme.btnGraySecondary;
      } else {
        return props.theme.btnSecondary;
      }
    }};
  };
`