import styled from "styled-components";
import Logo from "@/assets/dodum-logo.svg"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgSecondary};
`

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 100px;
    border-radius: 16px;
    justify-content: center;
    background-color: ${(props) => props.theme.bgPrimary};
    gap: 24px;
    box-shadow: ${(props) => props.theme.shadowLight};
`

export const DodumLogo = styled(Logo)`
  width: 144px;
`

export const InputConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Input = styled.input`
  width: 350px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #9B9B9B;
  font-size: 16px;
`

export const Error = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.btnRedPrimary};
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`