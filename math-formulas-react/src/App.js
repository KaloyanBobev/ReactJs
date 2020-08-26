import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Theory from './components/theory/Theory';
import Perimeter from './components/Perimeter/Perimeter';
import Area from './components/Area/Area';
import Quiz from './components/Quiz/Quiz';
import NotFound from './components/NotFound/NotFound';
class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Theory</a></li>
                            <li><a href="/perimeter">Perimeter</a></li>
                            <li><a href="/area">Area</a></li>
                            <li><a href="/quiz">Quiz</a></li>
                        </ul>
                        <BrowserRouter>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    component={Theory} />

                                <Route
                                    exact
                                    path="/perimeter"
                                    component={Perimeter} />
                                <Route
                                    exact
                                    path="/area"
                                    component={Area} />
                                <Route
                                    exact
                                    path="/quiz"
                                    component={Quiz} />
                                <Route
                                    path="/*"
                                    component={NotFound} />
                            </Switch>
                        </BrowserRouter>
                    </nav>
                </header>
            </div>
        )
    }
}
export default App;