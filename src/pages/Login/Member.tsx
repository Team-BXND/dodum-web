//import
import * as S from "@/pages/Login/Login.style.ts";
import { Outlet } from "react-router-dom";
import Logo from "@/assets/dodum-logo.svg";
const Member=() => {
    return<S.Background>
        <S.Card>
            <S.TitleCover>
            <S.Dodum as={Logo} aria-label="Dodum Logo"/>
            <S.Title>환영합니다!</S.Title>
            </S.TitleCover>
            <Outlet/>
        </S.Card>
    </S.Background>
}

export default Member;