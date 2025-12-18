import * as S from "./ButtonLong.style"

interface IButtonProps {
  type?: string,
  text?: string,
  onClick?: () => void;
}

function ButtonLong(props:IButtonProps) {
  return (
    <S.Container onClick={props.onClick}>{props.text}</S.Container>
  )
}

export default ButtonLong;