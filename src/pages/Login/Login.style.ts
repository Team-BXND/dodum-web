import styled from "styled-components"
export const Card=styled.form`
    width:34.375rem;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#FFFFFF;
    border-radius:16px;
    flex-direction:column;
    gap:3rem;
`

export const Background=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`

export const Dodum=styled.img`
    width:9rem;
    height:2.75rem;
`

export const Title=styled.h1`
    font-size:2.75rem;
    font-weight:600;
    color:black;
`

export const TitleCover=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:0.75rem;
    margin-top:4rem;
`

export const welcomeMessage=styled.h1`
    font-size:1.5rem;
    font-weight:400;
    color:#ADADAD;
`

export const Caption=styled.h1`
    font-size:1rem;
    font-weight:400;
    color:black;
    margin-top:0.5rem;

`

export const InputCover=styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
`

export const InputTitle=styled.h1`
    font-size:1rem;
    font-weight:400;
    color:black;
`

export const Input=styled.input<{ $placeholderColor?: string,$Color?:string }>`
    width:21.875rem;
    height:2.7rem;
    border:1px solid #9B9B9B;
    border-color:${(props)=>props.$Color || '#9B9B9B'};
    border-radius:8px;
    font-size:1rem;
    font-weight:400;
    color:black;
    padding-left:0.75rem;
    &::placeholder{
        color:${(props)=>props.$placeholderColor || '#747474'};
    }
`

export const LinkCover=styled.div`
    display:flex;
    width:21.875rem;
    justify-content:center;
    gap:11.5rem;
    position:relative;
    bottom:0.25rem;
`

export const ForgetPassword=styled.h1`
    font-size:0.75rem;
    color:#ADADAD;
    font-weight:400;
    text-decoration:underline;
`

export const Button=styled.button<{ $bgColor?: string }>`
    font-size:1.25rem;
    color:white;
    width:21.875rem;
    height:2.5rem;
    border-radius:8px;
    background-color:${(props)=>props.$bgColor || '#26874E'};
    border:none;
`

export const ErrorMessage=styled.h1`
    color:#FF3E3E;
    font-size:0.75rem;
    font-weight:400;
    margin-top:0.25rem;
`

export const ErrorCover=styled.div`
    margin-bottom:0.75rem;
`

export const SelectCover=styled.div`
    display:flex;
    flex-direction:row;
    gap:0.625rem;
    margin-bottom:0.75rem;
`

export const Select=styled.select`
    width:6.875rem;
    height:2.7rem;
    border-radius:8px;
`

export const ButtonCover=styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    margin-bottom:4rem;
`

export const NumberCover=styled.div`
display:flex;
flex-direction:row;
gap:0.5rem;
`

export const Number=styled.input`
    font-size:4rem;
    color:black;
    font-weight:600;
    maxLength:1;
    width:5rem;
    height:5rem;
    border-radius:8px;
    border:1px solid #9B9B9B;
    display:flex;
    padding-left:1.25rem;
`
export const certifi_Button=styled.button`
    width:6.5rem;
    height:1.7rem;
    font-size:1rem;
    font-weight:400;
    border:1px solid #26874E;
    border-radius:8px;
    color:#26874E;
    position:absolute;
    bottom:25.2rem;
    right:31rem;
    background-color:white;
`