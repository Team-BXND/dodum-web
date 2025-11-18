import SubTitle from "@/components/Text/SubTitle";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
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
    flex-direction: column;
    gap: 5px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Buttons = styled.div`
    width: 100%;
    justify-content: right;
    display: flex;
    gap: 16px;
    padding: 0px 0px 40px 24px;
`