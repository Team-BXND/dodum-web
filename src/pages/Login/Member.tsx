import * as S from "@/pages/Login/Login.style.ts";
import { Outlet } from "react-router-dom";
const Member=() => {
    return<S.Background>
        <S.Card>
            <S.TitleCover>
            <S.Dodum src="@/assets/image.png" alt="Dodum Logo"/>
            <S.Title>환영합니다!</S.Title>
            </S.TitleCover>
            <Outlet/>
        </S.Card>
    </S.Background>
}

export default Member;