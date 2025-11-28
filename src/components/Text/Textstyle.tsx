import { css } from "styled-components";
import { findColor } from "./FindColor";

export const BodyStyle = css`
    font-size: 24px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`

export const CaptionStyle = css`
    font-size: 16px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`
export const SubTitleStyle = css`
    font-size: 28px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`
export const TitleStyle = css`
    font-size: 44px;
    letter-spacing: -5%;
    font-weight: bold;
    color: ${(props) => {return findColor(props)}};
`