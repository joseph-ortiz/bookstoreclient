//import logo from './../logo.svg';
import './App.css';
import axios from 'axios';
import baseUrl from '../config'
import Layout from './layout/Layout'
import BookContainer from './book/BookContainer';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <BookContainer></BookContainer>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
