import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';

// Info 페이지
import Info from './pages/info/pages/InfoView/InfoView.tsx';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import EditArchive from './pages/Archive/pages/EditArchive';
import Archive from './pages/Archive/Archive';
import MajorResult from './pages/Major/Result/MajorResult';
import InfoDetail from './pages/info/pages/InfoDetail/InfoDetail.tsx';
import { PageProvider } from './pages/info/Context/InfoPageContext.tsx';
import AddInfo from '@/pages/info/add/AddInfo.tsx'
import AlterPage from './pages/info/pages/InfoAlter/AlterPages.tsx';

// Major
import Major from '@/pages/Major/Major';

// OtherInfo (etc)
import OtherInfo from './pages/OtherInfo/pages/OtherInfo';
import Posts from './pages/OtherInfo/pages/Posts';
import AddEtcInfo from './pages/OtherInfo/pages/AddEtcInfo';
import EtcDetail from './pages/OtherInfo/pages/Detail';

import Profile from './pages/Profile/Pages/Profile';
import ProfilePosts from './pages/Profile/Pages/Posts';
import ProfileDetail from './pages/Profile/Pages/ProfileDetail';
import ProfileEdit from './pages/Profile/Pages/ProfileEdit';
import Login from "@/pages/Login/Login.tsx";
import Register from "@/pages/Register/Register.tsx";
import Greeting from "@/pages/Register/Steps/Greeting.tsx";
import Credentials from "@/pages/Register/Steps/Credentials.tsx";
import StudentInfo from "@/pages/Register/Steps/StudentInfo.tsx";
import EmailVerify from "@/pages/Register/Steps/EmailVerify.tsx";

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
  { path: 'login', element: <Login /> },
  {
    path: 'register',
    element: <Register />,
    children: [
      { index: true, element: <Navigate to="1" replace /> },
      { path: '1', element: <Greeting /> },
      { path: '2', element: <Credentials /> },
      { path: '3-info', element: <StudentInfo /> },
      { path: '4', element: <EmailVerify /> },
    ],
  },
]);

export default router;
