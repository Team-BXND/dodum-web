import styled from "styled-components";
import { SubTitleStyle } from "./TextStyled";

const SubTitle = styled.h2<{ color?: "primary" | "secondary" | string }>`
    ${SubTitleStyle};
`

export default SubTitle;