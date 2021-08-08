import React, { Fragment } from 'react';
import './App.css';

// Importar componentes
import Sidenav from './Components/Sidenav';
import Header from './Components/Header';
import Content from './Components/Content';
import Aside from './Components/Aside';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App estrutura">
      <Header />
      <Sidenav />
      <Content />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
