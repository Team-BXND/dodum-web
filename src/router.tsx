import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import App from './App';
import Major from './pages/Major/Major';

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
