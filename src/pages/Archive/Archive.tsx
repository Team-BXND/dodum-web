import Category from "@/components/Category/Category";
import * as S from "./Archive.style";
import PageTitle from "@/components/PageTitle/PageTitle";
import { Outlet, useLocation } from "react-router-dom";
import { categories } from "@/constants/archive-category.constants"

function Archive() {
    const location = useLocation();
    const path = location.pathname.split("/");

    return (
        <S.Container>
            <PageTitle line text='아카이브' path={path.length == 4 ? path[2] : null}/>
            {(path.includes("add") || path.includes("edit")) ? null : <Category categories={categories}/>}
            <Outlet />
        </S.Container>
    );
};

export default Archive;