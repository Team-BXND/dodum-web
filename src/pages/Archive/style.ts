import styled from "styled-components";
import {Link} from "react-router";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: calc(80px - 2rem) calc(70px - 2rem) 0px calc(70px - 2rem);
    width: 100%;
    height: 100%;
`;

export const TileContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 24px;
    padding-top: 16px;
    flex-wrap: wrap;
`;

export const AddButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 68px;
    padding-top: 8px;
    color: #fff;
    position: fixed;
    right: 2vw;
    bottom: 2vw;
    width: 84px;
    height: 84px;
    border-radius: 42px;
    background-color: ${(props) => props.theme.mainColor};
    text-decoration: none;
`;