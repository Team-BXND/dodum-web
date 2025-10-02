import { createBrowserRouter } from 'react-router';
import Archive from '@/pages/Archive/Archive'
import Major from '@/pages/Major/Major';
import App from './App';
import MiniProject from './pages/Archive/pages/MiniProject';
import Awards from './pages/Archive/pages/Awards';
import Narsha from './pages/Archive/pages/Narsha';
import Club from './pages/Archive/pages/Club';
import Detail from './pages/Archive/pages/Detail';

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
            path: 'club',
            element: <Club />,
          },
          {
            path: 'narsha',
            element: <Narsha />,
          },
          {
            path: 'awards',
            element: <Awards />,
          },
          {
            path: 'mini-project',
            element: <MiniProject />,
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
