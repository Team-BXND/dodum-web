import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ButtonStyle = styled(Link)`
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

const AddButton = ({to}: {to: string}) => {
  return (
    <ButtonStyle to={to}>+</ButtonStyle>
  )
}

export default AddButton;