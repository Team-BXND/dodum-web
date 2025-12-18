import PageTitle from "@/components/PageTitle";
import * as S from "../../styles/OtherInfo.style"
import Category from "@/components/Category";
import { categories } from "@/constants/etcInfo-category.constants";
import { Outlet, useLocation } from "react-router-dom";
import AddButton from "@/components/AddButton";

function OtherInfo() {
  const location = useLocation()
  const path = location.pathname.split("/")

  return (
    <S.Container>
      <AddButton to="add" />
      <S.TitleContainer>
        <PageTitle text="기타 정보" />
        <input type="text" />
      </S.TitleContainer>
      {(path.includes("add") || path.includes("edit") || path.length === 4) ? null : <Category categories={categories}/>}
      <Outlet />
    </S.Container>
  )
}

export default OtherInfo;