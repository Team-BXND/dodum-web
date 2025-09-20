import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { GlobalStyle } from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
