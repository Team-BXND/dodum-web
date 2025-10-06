import { createBrowserRouter, Navigate } from 'react-router';
import Archive from '@/pages/Archive/Archive'
import Major from '@/pages/Major/Major';
import App from './App';
import Detail from './pages/Archive/pages/Detail';
import Posts from './pages/Archive/pages/Posts';

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
            path: 'club',
            element: <Posts category='club' />,
          },
          {
            path: 'narsha',
            element: <Posts category='narsha' />,
          },
          {
            path: 'awards',
            element: <Posts category='awards' />,
          },
          {
            path: 'mini-project',
            element: <Posts category='mini-project' />,
          },
          {
            path: 'club/:postId',
            element: <Detail/>
          },
          {
            path: 'narsha/:postId',
            element: <Detail/>
          },
          {
            path: 'awards/:postId',
            element: <Detail/>
          },
          {
            path: 'mini-project/:postId',
            element: <Detail/>
          },
        ]
      }
    ],
  },
]);

export default router;
