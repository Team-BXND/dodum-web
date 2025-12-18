import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';

// Info 페이지
import Info from './pages/Info/pages/InfoView';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import EditArchive from './pages/Archive/pages/EditArchive';
import Archive from './pages/Archive';
import MajorResult from './pages/Major/Result/MajorResult';
import InfoDetail from './pages/Info/pages/InfoDetail';
import { PageProvider } from '@/contexts/InfoPageContext';
import AddInfo from '@/pages/Info/add/AddInfo'
import AlterPage from './pages/Info/pages/InfoAlter/AlterPages';

// Major
import Major from '@/pages/Major';

// Login 과정
import Login from '@/pages/Login/Login';

import Member from './pages/Login/Member';
import Start from './pages/Login/Start';
import Member1 from './pages/Login/Member1';
import Member2 from './pages/Login/Member2';
import Certification from '@/pages/Login/Certification.tsx';
import PWChange1 from './pages/Login/PWChange1';
import PWChange2 from './pages/Login/PWChange2';

// OtherInfo (etc)
import OtherInfo from './pages/OtherInfo/pages/OtherInfo';
import Posts from './pages/OtherInfo/pages/Posts';
import AddEtcInfo from './pages/OtherInfo/pages/AddEtcInfo';
import EtcDetail from './pages/OtherInfo/pages/Detail';

import Profile from './pages/Profile/pages/Profile';
import ProfilePosts from './pages/Profile/pages/Posts';
import ProfileDetail from './pages/Profile/pages/ProfileDetail';
import ProfileEdit from './pages/Profile/pages/ProfileEdit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Major
      { path: 'major', element: <Major /> },
      { path: 'major/result', element: <MajorResult /> },

      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'profile/posts',
        element: <ProfilePosts />,
      },

      {
        path: 'profile/detail',
        element: <ProfileDetail />,
      },
      {
        path: 'profile/edit',
        element: <ProfileEdit />,
      },

      // Login
      { path: 'login', element: <Login /> },
      {
        path: 'member',
        element: <Member />,
        children: [
          { path: 'start', element: <Start /> },
          { path: 'member1', element: <Member1 /> },
          { path: 'member2', element: <Member2 /> },
          { path: 'certification', element: <Certification /> },
          { path: 'pwchange1', element: <PWChange1 /> },
          { path: 'pwchange2', element: <PWChange2 /> },
        ],
      },

      // Archive
      {
        path: 'info',
        element: (
          <PageProvider>
            <Info />
          </PageProvider>
        ),
      },
      {
        path: 'info/:id',
        element: <InfoDetail />,
      },
      {
        path: 'info/add',
        element: <AddInfo />,
      },
      {
        path: 'info/alter',
        element: <AlterPage />,
      },
      {
        path: 'archive',
        element: <Archive />,
        children: [
          { index: true, element: <Navigate to="club" replace /> },
          { path: ':category', element: <CategoryRoute /> },
          { path: ':category/:postId', element: <Detail /> },
          { path: 'add', element: <AddArchive /> },
          { path: 'edit/:postId', element: <EditArchive /> },
        ],
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'etc',
        element: <OtherInfo />,
        children: [
          {
            index: true,
            element: <Navigate to="all" replace />,
          },
          {
            path: 'all',
            element: <Posts category="전체" />,
          },
          {
            path: 'benefits',
            element: <Posts category="학교지원" />,
          },
          {
            path: 'tools',
            element: <Posts category="개발도구" />,
          },
          {
            path: 'courses',
            element: <Posts category="강의추천" />,
          },
          {
            path: 'add',
            element: <AddEtcInfo />,
          },
          {
            path: 'edit/:postId',
            element: <EditArchive />,
          },
        ],
      },
      {
        path: 'etc/:category/:postId',
        element: <EtcDetail />,
      },
    ],
  },
]);

export default router;
