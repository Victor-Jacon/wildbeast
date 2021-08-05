import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter> {/* Faz o componente Link funcionar. */}
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BrowserRouter>,
  document.getElementById('root')
);
