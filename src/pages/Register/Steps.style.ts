import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const RowContainer = styled.div`
  display: flex;
  width: 350px;
  gap: 10px;
`

export const RowSelect = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #9B9B9B;
  font-size: 16px;
`

export const RowInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #9B9B9B;
  font-size: 32px;
  text-align: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`