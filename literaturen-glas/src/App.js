import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
