import React from 'react';
import { Route, Link } from 'react-router-dom';

//import './App.css';


import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/rooms"> Rooms </Link>
        <Link to="/single-room"> Single room </Link>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/single-room" component={SingleRoom} />
    </>
  );
}

export default App;
