import styled from "styled-components"

const ButtonMainColor = styled.div`
    display: flex;
    padding: 8px 24px;
    border-radius: 8px;
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

export default function Button({ text, isGray, onClick } : {text?: string, isGray?: boolean, onClick: () => void}) {
    return isGray? (
        <ButtonGray onClick={onClick}>{text}</ButtonGray>
    ) : (
        <ButtonMainColor onClick={onClick}>{text}</ButtonMainColor>
    )
}