import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import * as S from './style';

const Layout = () => {
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
