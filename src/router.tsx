import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive';
import Major from '@/pages/Major/Major';
import Info from '@/pages/info/infoView';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/CategoryRoute';
import AddArchive from './pages/Archive/pages/AddArchive';
import MajorResult from './pages/Major/Result/MajorResult';
import InfoDetail from './pages/info/Detail/infoDetail.tsx';

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
        path: 'info',
        element: <Info />,
      },
      {
        path: 'info/:id',
        element: <InfoDetail />,
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
    ],
  },
]);

export default router;
