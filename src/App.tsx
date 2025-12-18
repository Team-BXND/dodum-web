import Layout from '@/components/Layout';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
