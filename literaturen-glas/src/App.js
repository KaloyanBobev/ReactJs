import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer';
import './i18next';

function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>

          <Header />

          <Main />
        </BrowserRouter>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
