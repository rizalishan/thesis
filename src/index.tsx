import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green, purple } from '@mui/material/colors';
import { Provider } from "react-redux";
import Routes from "./routes";
import storeConfig from "./store";
import { PersistGate } from "redux-persist/integration/react";
import '@fontsource/roboto-mono'
import './index.css';
import reportWebVitals from './reportWebVitals';
const { persistor, store } = storeConfig;

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono',
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Loading</p>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
