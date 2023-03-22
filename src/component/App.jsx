//import logo from './../logo.svg';
import './App.css';
import axios from 'axios';
import baseUrl from '../config'
import Layout from './layout/Layout'
import BookContainer from './book/BookContainer';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import reducers from '../module/index'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const theme = createTheme();

function App() {
  return (
    <Provider store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()

    )}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <BookContainer></BookContainer>
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
    </Provider>
  );
}

export default App;
