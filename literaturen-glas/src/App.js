import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import ImportantMessage from './components/ImportantMessage/ImportantMessage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <div className="row">
        <div className="col col-md-12">
          <BrowserRouter>
            <Header />
            <ImportantMessage />
            <Main />
          </BrowserRouter>
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
