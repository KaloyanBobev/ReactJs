import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";


import Home from './Home';
class Main extends React.Component {

    render() {
        return (
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact path="/"
                            component={Home} />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}

export default Main;