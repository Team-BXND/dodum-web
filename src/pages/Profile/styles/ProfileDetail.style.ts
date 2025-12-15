import Caption from "@/components/Text/Caption";
import SubTitle from "@/components/Text/SubTitle";
import { styled } from "styled-components";

export const Container = styled.form`
    width: 100%;
    height: 100%;
    gap: 40px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 82px 70px 0px 70px;
`

export const Title = styled(SubTitle)`
    font-weight: bold;
    font-size: 32px;
`

export const ProfileContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`

export const Image = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`

export const InfoContainer = styled.div`
    display: flex;
    width: 680px;
    flex-direction: column;
    gap: 5px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Buttons = styled.div`
    width: 100%;
    justify-content: right;
    display: flex;
    gap: 16px;
    padding: 0px 0px 40px 24px;
`

export const Input = styled.input`
    width: 100%;
    font-size: 20px;
    background-color: #00000000;
    border: 0;
    border: 1px solid ${(props) => props.theme.btnGraySecondary};
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
`

export const ShortInput = styled(Input)`
    width: 100%;
`


export const StudentNumberContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const ErrorMsg = styled(Caption)`
    color: #ff3535ff;
    font-size: 12px;
    padding: 2px 0px 8px 0px;
`