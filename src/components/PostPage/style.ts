import styled from "styled-components";
import { BodyStyle, SubTitleStyle, TitleStyle } from "../Text/TextStyle";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-height: 100vh;
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
        ${BodyStyle}
    }


`

export const Image = styled.img`
    width: 100%;
`

export const Info = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
`

export const OptionButton = styled.button`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const Options = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #fff;
    padding: 10px;
    box-shadow: ${(props) => props.theme.shadowLight};
    background-color: ${(props) => props.theme.bgPrimary};
    border-radius: 10px;
`

export const Option = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`