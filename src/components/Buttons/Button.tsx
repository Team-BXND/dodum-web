import styled from "styled-components"

const ButtonMainColor = styled.button`
    display: flex;
    padding: 8px 24px;
    border-radius: 8px;
    border: 0;
    font-size: 16px;
    background-color: ${(props) => props.theme.btnPrimary};
    color: #fff;
    &:hover {
        background-color: ${(props) => props.theme.btnSecondary};
    }
`

const ButtonGray = styled(ButtonMainColor)`
    background-color: ${(props) => props.theme.btnGrayPrimary};
    &:hover {
        background-color: ${(props) => props.theme.btnGraySecondary};
    }
`

export default function Button({ text, isGray, onClick, type="button", className } : {text: string, isGray?: boolean, onClick?: () => void, type?: "button" | "submit" | "reset", className?: string}) {
    return isGray? (
        <ButtonGray onClick={onClick} type={type} className={className}>{text}</ButtonGray>
    ) : (
        <ButtonMainColor onClick={onClick} type={type} className={className}>{text}</ButtonMainColor>
    )
}