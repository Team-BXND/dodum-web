import Category from "@/components/Category/Category";
import * as S from "./Archive.style";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Outlet } from "react-router-dom";

function Archive() {
    return (
        <S.Container>
            <PageTitle text='아카이브'/>
            <Category/>
            <Outlet />
        </S.Container>
    );
};

export default Archive;