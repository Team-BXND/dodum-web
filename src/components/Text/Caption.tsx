import styled from "styled-components";
<<<<<<< HEAD
import { CaptionStyle } from "./Textstyle";
=======
import { CaptionStyle } from "./TextStyle";
>>>>>>> origin/develop

const Caption = styled.span<{ color?: "primary" | "secondary" | string }>`
    ${CaptionStyle};
`

export default Caption;