import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Router from '../../Router';

import logo from '../../assets/images/logo.svg';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import { Container, Header } from './styles';
import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header>
            <img src={logo} alt="Logo" />
          </Header>

          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
