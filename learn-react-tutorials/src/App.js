import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import AppLayout from './components/AppLayout';
import { ProtectedRoute } from './components/protected.route';
import NotFound from './components/NotFound';

export default class App extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="./app">App</a></li>
                    </ul>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={LandingPage} />
                            <ProtectedRoute
                                exact
                                path="/app"
                                component={AppLayout} />
                            <Route
                                path="*"
                                component={NotFound} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}

