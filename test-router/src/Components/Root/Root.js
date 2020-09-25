import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import About from './About/About';
import Home from './Home/Home';

const Root = () => {
    return (
        <div>
            <strong>ROOT COMPONENT</strong>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Switch>
                <Route component={Home} exact path="/" />
                <Route component={About} path="/about" />
            </Switch>


        </div>
    )
}

export default Root;