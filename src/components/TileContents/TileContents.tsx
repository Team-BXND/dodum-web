import { Link } from "react-router-dom";
import styled from "styled-components"



const TileContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
    width: 100%;
    height: 425px;
    background-color: ${(props) => (props.theme.bgPrimary)};
    border-radius: 16px;
    min-width: 200px;
    max-width: 20rem;
    text-decoration: none;
    color: ${(props) => (props.theme.textPrimary)};
    box-shadow: ${(props) => props.theme.shadowLight};
`

const TItleContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: end;
    gap: 4px;
`

const Title = styled.h2`
    font-size: 24px;
    letter-spacing: -5%;
    font-weight: bold;
`

const Author = styled.h3`
    font-size: 16px;
    letter-spacing: -5%;
    font-weight: bold;
`

const Body = styled.p`
    font-size: 16px;
    letter-spacing: -5%;
`


const Thumbnail = styled.img`
    width: 100%;
    height: 260px;
    border-radius: 14px;
    object-fit: cover;
`;

interface TileInterface {
    to: string;
    thumbnail?: string,
    title?: string,
    author?: string,
    description?: string,
}   

const Tile = (props: TileInterface) => {
    return (
        <TileContainer to={props.to}>
            <Thumbnail src={props.thumbnail ? props.thumbnail : 'https://play-lh.googleusercontent.com/eM6yGP8pECXPCZ8xWA9aDkDY2rusnpuMl8WZiYUZ2fHdTd0Sj8QwPois6xhVsv-h3g'} />
            <TItleContainer>
                <Title>{props.title? props.title : "도담도담"}</Title>
                <Author>{props.author? props.author : "Team B1ND"}</Author>
            </TItleContainer>
            <Body>{props.description?.slice(0, 120)}{(props.description?.length?? 0) > 120  ? "..." : null}</Body>
        </TileContainer>
    )
}


export default Tile;