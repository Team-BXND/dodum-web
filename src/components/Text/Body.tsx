import styled from "styled-components";
import { findColor } from "./findcolor";

const Body = styled.h1<{ color?: "primary" | "secondary" | string }>`
    font-size: 24px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`

export default Body;