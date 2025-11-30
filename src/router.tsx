import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from './App';

// Major
import Major from '@/pages/Major/Major';
import MajorResult from '@/pages/Major/Result/MajorResult';

// Login 과정
import Login from '@/pages/Login/Login';
import Member from './pages/Login/Member';
import Start from './pages/Login/Start';
import Member1 from './pages/Login/Member1';
import Member2 from './pages/Login/Member2';
import Certification from './pages/Login/Certification';
import PWChange1 from './pages/Login/PWChange1';
import PWChange2 from './pages/Login/PWChange2';

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
      {
        path: "member",
        element: <Member />,
        children: [
          { path: '/start', element: <Start /> },
          { path: '/member1', element: <Member1/> },
          { path: '/member2', element: <Member2/> },
          { path: '/certificaion', element: <Certification /> },
          { path: '/pwchange1', element: <PWChange1 /> },
          { path: '/pwchange2', element: <PWChange2 /> },
        ]
      },

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