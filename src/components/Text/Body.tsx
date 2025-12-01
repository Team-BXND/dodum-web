import styled from "styled-components";
import { BodyStyle } from "./TextStyle";

const Body = styled.p<{ color?: "primary" | "secondary" | string }>`
    ${BodyStyle};
`

export default Body;