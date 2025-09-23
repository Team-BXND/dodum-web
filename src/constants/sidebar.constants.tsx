import InfoShareIcon from '@/assets/sidebar/info-share.svg';
import ArchiveIcon from '@/assets/sidebar/archive.svg';
import MajorSelectIcon from '@/assets/sidebar/major-select.svg';
import ContestInfoIcon from '@/assets/sidebar/contest-info.svg';
import EtcInfoIcon from '@/assets/sidebar/etc-info.svg';
import ProfileIcon from '@/assets/sidebar/profile.svg';
import type { ReactElement } from 'react';

interface TabItem {
  id: string;
  name: string;
  icon: ReactElement;
  to: string;
  isBottom?: boolean;
}

export const tabList: TabItem[] = [
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
  {
    id: 'profile',
    name: '내 정보',
    icon: <ProfileIcon />,
    to: '/profile',
    isBottom: true,
  },
];
