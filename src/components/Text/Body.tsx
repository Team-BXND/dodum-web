import styled from "styled-components";
<<<<<<< HEAD
import { BodyStyle } from "./Textstyle";
=======
import { BodyStyle } from "./TextStyle";
>>>>>>> origin/develop

const Body = styled.p<{ color?: "primary" | "secondary" | string }>`
    ${BodyStyle};
`

export default Body;