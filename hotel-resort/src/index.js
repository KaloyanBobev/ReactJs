import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoomProvider } from './Context';


ReactDOM.render(
  <RoomProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </RoomProvider>,
  document.getElementById('root')
);


reportWebVitals();
