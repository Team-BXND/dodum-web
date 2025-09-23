import Layout from '@/components/Layout/Layout';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
