import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major';
import Competition_info from './pages/competition_info/Competition_info';
import Competition_info_add from './pages/competition_info/Competiton_info_add';
import App from './App';

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
        path:"competition_info",
        element:<Competition_info/>
      },
      {
        path:"competition_info_add",
        element:<Competition_info_add/>
      }
    ],
  },
]);

export default router;
