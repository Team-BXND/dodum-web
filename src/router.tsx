import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive'
import Major from '@/pages/Major/Major';
import Info from '@/pages/info/infoView';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import MajorResult from './pages/Major/Result/MajorResult';
import OtherInfo from './pages/OtherInfo/OtherInfo';
import Posts from './pages/OtherInfo/Posts';

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
        ]
      },
    ],
  },
]);


export default router;
