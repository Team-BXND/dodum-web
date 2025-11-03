import styled from "styled-components";
import { SubTitleStyle } from "./TextStyle";

const SubTitle = styled.h2<{ color?: "primary" | "secondary" | string }>`
    ${SubTitleStyle};
`

export default SubTitle;