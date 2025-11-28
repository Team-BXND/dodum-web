import PageTitle from "@/components/PageTitle/PageTitle";
import * as S from "../styles/OtherInfo.style"
import Category from "@/components/Category/Category";
import { categories } from "@/constants/etcInfo-category.constants";
import { Outlet } from "react-router-dom";
import AddButton from "@/components/AddButton/AddButton";





function OtherInfo() {

  return (
    <S.Container>
      <AddButton to="add" />
      <S.TitleContainer>
        <PageTitle text="기타 정보" />
        <input type="text" />
      </S.TitleContainer>
      <Category categories={categories}/>
      <Outlet />
    </S.Container>
  )
}

export default OtherInfo;