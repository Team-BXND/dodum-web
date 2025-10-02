import styled from "styled-components";
import { findColor } from "./findcolor";

const Title = styled.h1<{ color?: "primary" | "secondary" | string }>`
    font-size: 44px;
    letter-spacing: -5%;
    font-weight: bold;
    color: ${(props) => {return findColor(props)}};
`

export default Title;