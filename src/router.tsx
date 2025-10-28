import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major';
import Info from '@/pages/info/infoView';
import App from './App';
import MajorResult from './pages/Major/Result/MajorResult';

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
    ],
  },
]);

export default router;
