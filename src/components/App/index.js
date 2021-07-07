import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';

import logo from '../../assets/images/logo.svg';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container, Header } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Header>
            <img src={logo} alt="Logo" />
          </Header>

          <Routes />
        </Container>

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
