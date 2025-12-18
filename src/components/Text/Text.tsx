import styled, { css } from "styled-components";

type TextProps = {
  color?: string;
}

const Default = css<TextProps>`
  color: ${(props) => {
    if (props.color) {
      return props.color;
    } else {
      return props.theme.textPrimary;
    }
  }};
`

export const Title = styled.h1<TextProps>`
  ${Default}
  font-size: 44px;
  letter-spacing: -0.05em;
  font-weight: 600;
`

export const Body = styled.p<TextProps>`
  ${Default}
  font-size: 24px;
  letter-spacing: -0.05em;
  font-weight: 400;
`

export const Caption = styled.p<TextProps>`
  ${Default}
  font-size: 16px;
  letter-spacing: -0.05em;
  font-weight: 400;

`