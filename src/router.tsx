import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';
import ProtectedRoute from '@/components/ProtectedRoute';

// Info 페이지
import Info from '@/pages/Info/pages/InfoView';
import Detail from '@/pages/Archive/pages/Detail';
import CategoryRoute from '@/pages/Archive/CategoryRoute';
import AddArchive from '@/pages/Archive/pages/AddArchive';
import EditArchive from '@/pages/Archive/pages/EditArchive';
import Archive from '@/pages/Archive';
import MajorResult from '@/pages/Major/Result/MajorResult';
import InfoDetail from '@/pages/Info/pages/InfoDetail';
import { PageProvider } from '@/contexts/InfoPageContext';
import AddInfo from '@/pages/Info/add/AddInfo'
import AlterPage from '@/pages/Info/pages/InfoAlter/AlterPages';

// Major
import Major from '@/pages/Major';

// Login 과정
import Login from '@/pages/Login/Login';
import Register from '@/pages/Register/Register';
import Greeting from '@/pages/Register/Steps/Greeting';
import Credentials from '@/pages/Register/Steps/Credentials';
import StudentInfo from '@/pages/Register/Steps/StudentInfo';
import EmailVerify from '@/pages/Register/Steps/EmailVerify';

// OtherInfo (etc)
import OtherInfo from './pages/OtherInfo/pages/OtherInfo';
import Posts from './pages/OtherInfo/pages/Posts';
import AddEtcInfo from './pages/OtherInfo/pages/AddEtcInfo';
import EtcDetail from './pages/OtherInfo/pages/Detail';

import Profile from '@/pages/Profile/pages/Profile';
import ProfilePosts from '@/pages/Profile/pages/Posts';
import ProfileDetail from '@/pages/Profile/pages/ProfileDetail';
import ProfileEdit from '@/pages/Profile/pages/ProfileEdit';

const router = createBrowserRouter([
  // Login & Register
  { path: 'login', element: <Login /> },
  {
    path: 'register',
    element: <Register />,
    children: [
      { path: 'greeting', element: <Greeting /> },
      { path: 'credentials', element: <Credentials /> },
      { path: 'student-info', element: <StudentInfo /> },
      { path: 'email-verify', element: <EmailVerify /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      // 루트 경로 리다이렉트
      { index: true, element: <Navigate to="/info" replace /> },
      {
        element: <ProtectedRoute />,
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
    ],
  },
]);

export default router;
