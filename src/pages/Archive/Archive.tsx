import Category from "@/components/Category/Category";
import * as S from "./Archive.style";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Outlet, useLocation } from "react-router-dom";

function Archive() {
    const location = useLocation();
    const path = location.pathname.split("/");

    return (
        <S.Container>
            <PageTitle text='아카이브' path={path.length == 4 ? path[2] : null}/>
            {(path.length) == 3 ? <Category/> : null}
            <Outlet />
        </S.Container>
    );
};

export default Archive;