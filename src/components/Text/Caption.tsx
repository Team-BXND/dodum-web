import styled from "styled-components";
import { CaptionStyle } from "./TextStyled";

const Caption = styled.span<{ color?: "primary" | "secondary" | string }>`
    ${CaptionStyle};
`

export default Caption;