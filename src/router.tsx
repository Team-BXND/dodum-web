import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';

// Major
import Major from '@/pages/Major/Major';
import MajorResult from '@/pages/Major/Result/MajorResult';

// Login 과정
import Login from '@/pages/Login/Login';
import Domember1 from '@/pages/Login/Domember1';
import Domember2 from '@/pages/Login/Domember2';
import Domember3 from '@/pages/Login/Domember3';
import Domember4 from '@/pages/Login/Domember4';
import PWChange1 from '@/pages/Login/PWChange1';
import PWChange2 from '@/pages/Login/PWChange2';

// Archive
import Archive from '@/pages/Archive/Archive';
import Detail from '@/pages/Archive/pages/Detail';
import CategoryRoute from '@/pages/Archive/CategoryRoute';
import AddArchive from '@/pages/Archive/pages/AddArchive';

// Info 페이지
import Info from '@/pages/info/infoView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Major
      { path: 'major', element: <Major /> },
      { path: 'major/result', element: <MajorResult /> },

      // Login
      { path: 'login', element: <Login /> },
      { path: 'domember1', element: <Domember1 /> },
      { path: 'domember2', element: <Domember2 /> },
      { path: 'domember3', element: <Domember3 /> },
      { path: 'domember4', element: <Domember4 /> },
      { path: 'pwchange1', element: <PWChange1 /> },
      { path: 'pwchange2', element: <PWChange2 /> },

      // Archive
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

      // Info
      { path: 'info', element: <Info /> },
    ],
  },
]);

export default router;