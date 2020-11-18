import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';


import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom'


function App() {
  return (
    <>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/rooms"> Rooms </Link>
        <Link to="/single-room"> SingleRoom </Link>
        <Link to="**">Error</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/rooms" component={Rooms}> </Route>
        <Route path="/single-room" component={SingleRoom}> </Route>

      </Switch>


    </>
  );
}

export default App;
