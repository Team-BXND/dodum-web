import styled from "styled-components";
import { CaptionStyle } from "./TextStyle";

const Caption = styled.span<{ color?: "primary" | "secondary" | string }>`
    ${CaptionStyle};
`

export default Caption;