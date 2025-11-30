import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major.tsx';
import Competition_info from '@/pages/competition_info/Info/Competition_info_writing.tsx';
import AddInfo from '@/pages/competition_info/Add/AddInfo.tsx';
import Competition_info_writing from '@/pages/competition_info/Info/Competition_info_writing.tsx';
import Modify from './pages/competition_info/Modify/Modify';
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
        path:"add_info",
        element:<AddInfo/>
      },
      {
        path:"competition_info_writing/:id",
        element:<Competition_info_writing />
      },
      {
        path:"modify/:id",
        element:<Modify />
      }
    ],
  },
]);

export default router;
