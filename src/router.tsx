import { createBrowserRouter } from 'react-router';
import Major from '@/pages/Major/Major';
import Login from './pages/Login/Login';
import Domember1 from './pages/Login/Domember1';
import Domember2 from './pages/Login/Domember2';
import DoMember3 from './pages/Login/Domember3';
import DoMember4 from './pages/Login/Domember4';
import PWChange1 from './pages/Login/PWChange1';
import PWChange2 from './pages/Login/PWChange2';
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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'domember1',
        element: <Domember1 />,
      },
      {
        path: 'domember2',
        element: <Domember2 />,        
      },
      {
        path: 'domember3',
        element: <DoMember3 />,
      },
      {
        path: 'domember4',
        element: <DoMember4 />,
      },
      {
        path: 'pwchange1',
        element: <PWChange1 />,
      },
      {
        path: 'pwchange2',
        element: <PWChange2 />,
      }
    ],
  },
]);

export default router;
