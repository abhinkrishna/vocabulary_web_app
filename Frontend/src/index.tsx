import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import appTheme from './theme/material';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline/> 
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
