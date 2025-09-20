import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar/Sidebar';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
