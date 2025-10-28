import styled from "styled-components";
import { BodyStlye, SubTitleStyle, TitleStyle } from "../Text/TextStyled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-height: 100bh;
    padding: 40px 48px;
    margin-top: 20px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.bgPrimary};
    box-shadow: 
    0px 10.85px 21.71px 0px rgba(0, 0, 0, 0.08),
    0px 0px 5.43px 0px rgba(0, 0, 0, 0.05);

`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
    border-bottom: 2.5px dotted rgba(0, 0, 0, 0.2);
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 0px;
    gap: 8px;
    width: 100%;

    h1 {
        ${TitleStyle}
    }

    h2 {
        ${SubTitleStyle}
    }

    p {
        ${BodyStlye}
    }


`

export const Image = styled.img`
    width: 100%;
`