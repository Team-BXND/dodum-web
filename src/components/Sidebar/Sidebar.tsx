import * as S from './Sidebar.style.ts';
import { tabList } from '@/constants/sidebar.constants.tsx';
import { useLocation } from 'react-router';

const Sidebar = () => {
  const location = useLocation();
  return (
    <S.Container>
      <S.Logo />
      <S.Tabs>
        {tabList
          .filter((item) => !item.isBottom)
          .map((item) => (
            <S.Tab
              key={item.id}
              to={item.to}
              $active={location.pathname.startsWith(item.to)}
            >
              {item.icon}
              {item.name}
            </S.Tab>
          ))}
      </S.Tabs>
      {tabList
        .filter((item) => item.isBottom)
        .map((item) => (
          <S.Tab
            key={item.id}
            to={item.to}
            $active={location.pathname.startsWith(item.to)}
          >
            {item.icon}
            {item.name}
          </S.Tab>
        ))}
    </S.Container>
  );
};

export default Sidebar;
