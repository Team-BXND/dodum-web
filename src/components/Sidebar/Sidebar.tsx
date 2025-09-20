import * as S from './Sidebar.style.ts';
import InfoShareIcon from '@/assets/sidebar/info-share.svg';
import ArchiveIcon from '@/assets/sidebar/archive.svg';
import MajorSelectIcon from '@/assets/sidebar/major-select.svg';
import ContestInfoIcon from '@/assets/sidebar/contest-info.svg';
import EtcInfoIcon from '@/assets/sidebar/etc-info.svg';
import ProfileIcon from '@/assets/sidebar/profile.svg';
import { useLocation } from 'react-router';

interface TabItem {
  id: string;
  name: string;
  icon: React.ReactElement;
  to: string;
}

const tabList: TabItem[] = [
  { id: 'info', name: '정보공유', icon: <InfoShareIcon />, to: '/info' },
  { id: 'archive', name: '아카이브', icon: <ArchiveIcon />, to: '/archive' },
  { id: 'major', name: '전공선택', icon: <MajorSelectIcon />, to: '/major' },
  {
    id: 'contest',
    name: '대회정보',
    icon: <ContestInfoIcon />,
    to: '/contest',
  },
  { id: 'etc', name: '기타정보', icon: <EtcInfoIcon />, to: '/etc' },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <S.Container>
      <S.Logo />
      <S.Tabs>
        {tabList.map((item) => (
          <S.Tab
            key={item.id}
            to={item.to}
            $active={
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.to)
            }
          >
            {item.icon}
            {item.name}
          </S.Tab>
        ))}
      </S.Tabs>
      <S.Tab
        key="profile"
        to="/profile"
        $active={location.pathname.startsWith('/profile')}
      >
        <ProfileIcon />내 정보
      </S.Tab>
    </S.Container>
  );
}
