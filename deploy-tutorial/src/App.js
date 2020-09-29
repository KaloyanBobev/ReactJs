import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './About';
import Home from './Home';

class App extends React.Component {

    render() {
        return (
            <div className="App-header">
                <nav>

                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Switch>
                        <Route component={Home} exact path="/" />
                        <Route component={About} exact path="/about" />
                    </Switch>
                </nav>
                <h1>APP</h1>
                <p>My awsemo react App </p>
            </div>
        )
    }

}

export default App;