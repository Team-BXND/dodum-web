import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive'
import Major from '@/pages/Major/Major';
import Info from '@/pages/info/infoView';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import MajorResult from './pages/Major/Result/MajorResult';
import Profile from './pages/Profile/Pages/Profile';
import ProfileDetail from './pages/Profile/Pages/ProfileDetail';
import ProfileEdit from './pages/Profile/Pages/ProfileEdit';
import Posts from './pages/Profile/Pages/Posts';
import ResetPassword from './pages/Profile/Pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'major',
        element: <Major />,
      },
      {
        path: 'major/result',
        element: <MajorResult />,
      },
      {
        path: 'archive',
        element: <Archive />,
        children: [
          { index: true, element: <Navigate to="club" replace /> },
          { path: ':category', element: <CategoryRoute /> },
          { path: ':category/:postId', element: <Detail /> },
          { path: ':category/add', element: <AddArchive /> },
        ],
      },
      {
        path: 'info',
        element: <Info />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'profile/detail',
        element: <ProfileDetail />
      },
      {
        path: 'profile/edit',
        element: <ProfileEdit />
      },
      {
        path: 'profile/password',
        element: <ResetPassword />
      },
      {
        path: 'profile/posts',
        element: <Posts />
      },
    ],
  },
]);


export default router;
