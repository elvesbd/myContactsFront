import { ThemeProvider } from 'styled-components';

import Header from '../Header';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
      </Container>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
