import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive'
import Major from '@/pages/Major/Major';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import CategoryRoute from './pages/Archive/categoryRoute';
import AddPost from './pages/Archive/pages/AddArchive';

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
        path: 'archive',
        element: <Archive />,
        children: [
          {
            index: true,
            element: <Navigate to="club" replace />,
          },
          {
            path: ':category',
            element: <CategoryRoute />,
          },
          {
            path: ':category/:postId',
            element: <Detail/>,
          },
          {
            path: ':category/add',
            element: <AddPost/>,
          },
        ]
      }
    ],
  },
]);

export default router;
