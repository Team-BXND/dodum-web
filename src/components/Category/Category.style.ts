import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 10px 0px;
`;

export const Tab = styled(Link)<{ $active?: boolean }>`
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    padding: 4px 30px 0px 30px;
    border-radius: 15px;
    background-color: ${(props) => (props.$active ? props.theme.mainColor : 'white')};
    border: 1px solid ${(props) => (props.theme.mainColor)};
    color: ${(props) => (props.$active ? 'white' : props.theme.mainColor)};
    text-decoration: none;
`;