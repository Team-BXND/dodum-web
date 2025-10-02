import styled from "styled-components";
import { findColor } from "./findcolor";

const SubTitle = styled.h2<{ color?: "primary" | "secondary" | string }>`
    font-size: 28px;
    letter-spacing: -5%;
    color: ${(props) => {return findColor(props)}};
`

export default SubTitle;