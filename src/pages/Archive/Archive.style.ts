import styled from "styled-components";

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