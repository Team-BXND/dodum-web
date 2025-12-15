import styled from "styled-components";
import { TileTitleStyle } from "./TextStyle";

const TileTitle = styled.h2<{ color?: "primary" | "secondary" | string }>`
    ${TileTitleStyle};
`

export default TileTitle;