import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import * as S from './Layout.style';

function Layout() {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}

export default Layout;
