import styled from "styled-components";
import { TitleStyle } from "./Textstyle";

const Title = styled.h1<{ color?: "primary" | "secondary" | string }>`
    ${TitleStyle};
`

export default Title;
