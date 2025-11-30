import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive'
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
import EditArchive from '@/pages/Archive/pages/EditArchive';

// Info 페이지
import Info from '@/pages/info/infoView';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import MajorResult from './pages/Major/Result/MajorResult';

// OtherInfo (etc)
import OtherInfo from '@/pages/OtherInfo/pages/OtherInfo';
import Posts from '@/pages/OtherInfo/pages/Posts';
import AddEtcInfo from '@/pages/OtherInfo/pages/AddEtcInfo';
import EtcDetail from '@/pages/OtherInfo/pages/Detail';

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
            element: <Posts category='전체'/>
          },
          {
            path: 'benefits',
            element: <Posts category='학교지원'/>
          },
          {
            path: 'tools',
            element: <Posts category='개발도구' />
          },
          {
            path: 'courses',
            element: <Posts category='강의추천' />
          },
          {
            path: 'add',
            element: <AddEtcInfo />
          },
          { 
            path: 'edit/:postId', 
            element: <EditArchive /> 
          },
        ]
      },
      { 
        path: 'etc/:category/:postId',
          element: <EtcDetail /> 
      },
    ],
  },
]);


export default router;
