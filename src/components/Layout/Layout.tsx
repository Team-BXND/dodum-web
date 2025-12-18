import {Outlet} from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import * as S from './Layout.style';
import {isLoggedIn, logout} from "@/api/auth.ts";
import {useEffect} from "react";

const Layout = () => {
  useEffect(() => {
    if (!isLoggedIn()) {
      logout();
    }
  }, []);

  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
};

export default Layout;
