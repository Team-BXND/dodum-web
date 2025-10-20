import styled from "styled-components";
import { BodyStlye } from "./TextStyled";

const Body = styled.p<{ color?: "primary" | "secondary" | string }>`
    ${BodyStlye};
`

export default Body;