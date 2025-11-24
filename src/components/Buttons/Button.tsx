import styled from "styled-components"

interface IButtonProps {
    isGray?: boolean
}

const ButtonMainColor = styled.button<IButtonProps>`
    display: flex;
    padding: 8px 24px;
    border-radius: 8px;
    border: 0;
    font-size: 16px;
    background-color: ${(props) => props.isGray ? props.theme.btnPrimary : props.theme.btnGrayPrimary};
    color: #fff;
    &:hover {
        background-color: ${(props) => props.isGray ? props.theme.btnSecondary : props.theme.btnGraySecondary};
    }
`

export default function Button({ text, isGray, onClick, type="button", className } : {text: string, isGray?: boolean, onClick?: () => void, type?: "button" | "submit" | "reset", className?: string}) {
    return <ButtonMainColor isGray={isGray} onClick={onClick} type={type} className={className}>{text}</ButtonMainColor>
}