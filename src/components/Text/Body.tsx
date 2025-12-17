import styled from "styled-components";
import { BodyStyle } from "./Textstyle";

const Body = styled.p<{ color?: "primary" | "secondary" | string }>`
    ${BodyStyle};
`

export default Body;