import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import ImportantMessage from './components/Main/ImportantMessage';
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
        </div>
      </div>


    </div>
  );
}

export default App;
