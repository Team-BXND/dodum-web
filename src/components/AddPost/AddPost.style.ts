import { SubTitleStyle, TitleStyle } from "@/components/Text/Textstyle";
import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
    width: 100%;
    height: auto;
    background-color: ${(props) => props.theme.bgPrimary};
    padding: 40px 60px 12px 60px;
    margin-top: 24px;
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.shadowLight};
`

export const Title = styled.input`
    width: 100%;
    &::placeholder {
        color: ${(props) => props.theme.textSecondary};
    }
    &:focus {
        outline: none;
    }
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.textSecondary};
    padding: 8px 0px;
    ${TitleStyle};
`

export const TagsContainer = styled.div`
    display: flex;
    gap: 12px;
`

export const SubTitle = styled(Title)`
    ${SubTitleStyle};
`

export const Category = styled.select`
    width: 100%;
    &:focus {
        outline: none;
    }
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.textSecondary};
    padding: 8px 0px;
    ${SubTitleStyle};
    font-size: 1.35rem;
    font-weight: bold;
    &:invalid {
        color: ${(props) => props.theme.textSecondary};
    }
`

export const Author = styled(SubTitle)`
    font-size: 1.35rem;
`

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 10px;
    padding: 12px 0px 32px 0px;
`