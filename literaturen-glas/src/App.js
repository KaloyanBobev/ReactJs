import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer';
import './i18next';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
