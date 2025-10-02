import styled from "styled-components";
import { findColor } from "./findcolor";

const Caption = styled.span<{ color?: "primary" | "secondary" | string }>`
    font-size: 16px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`

export default Caption;