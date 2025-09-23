import { createBrowserRouter } from 'react-router';
import Home from '@/pages/Home/Home';
import Major from '@/pages/Major/Major';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'major',
        element: <Major />,
      },
    ],
  },
]);

export default router;
