import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major';
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
    ],
  },
]);

export default router;
