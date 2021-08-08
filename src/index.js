import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";

ReactDOM.render(
  <BrowserRouter> {/* Faz o componente Link funcionar. */}
    <React.StrictMode>
      <Helmet> {/* Permite alterar o <head> do nosso react app */}
        <title>Wildbeast</title> {/* Título do Site que aparece no topo do navegador */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> {/* Faz o responsivo funcionar, só copiar e colar. No react, a tag meta é <meta /> */}
      </Helmet>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
