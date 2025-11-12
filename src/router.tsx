import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major';
import Info from '@/pages/info/infoView';
import App from './App';
import MajorResult from './pages/Major/Result/MajorResult';
import InfoDetail from './pages/info/Detail/infoDetail.tsx'

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
      }
    ],
  },
]);

export default router;