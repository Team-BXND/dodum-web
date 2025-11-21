import Button from "@/components/Buttons/Button";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 70px 0px 70px;
`

export const Title = styled.h1`
    font-size: 32px;
    letter-spacing: -5%;
    font-weight: 700;
`

export const Body = styled.div`
    width: 100%;
    padding: 24px 0px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const UserInfo = styled.div`
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    border-radius: 24px;
    box-shadow: ${(props) => props.theme.boxShadow};
    background-color: ${(props) => props.theme.bgPrimary};
    /* &:hover {
        background-color: ${(props) => props.theme.bgSecondary};
    } */
`

export const Profile = styled.div`
    display: flex;
    gap: 16px;
`

export const ProfileImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const ActivityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const Activity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const ActivityTitle = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const VLine = styled.div`
    width: 1px;
    height: 45px;
    background-color: #000;    
`

export const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 24px;
    padding: 24px 28px;
    background-color: ${(props) => props.theme.bgPrimary};
    box-shadow: ${(props) => props.theme.boxShadow};
`

export const PostHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Posts = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0px 12px;
    overflow: scroll;
`

export const Buttons = styled.div`
    width: 100%;
    justify-content: right;
    display: flex;
    gap: 16px;
    padding: 0px 0px 40px 24px;
`

export const LogoutButton = styled(Button)`
    background-color: ${(props) => props.theme.btnRedPrimary} !important;
    &:hover {
        background-color: ${(props) => props.theme.btnRedSecondary} !important;
    }
`