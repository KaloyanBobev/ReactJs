import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Main/Home.js';
import Newspapers from '../Newspaper/Newspapers';
import Books from '../Main/Books';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route path="/newspapers">
                        <Newspapers />
                    </Route>
                    <Route path="/books">
                        <Books />
                    </Route>
                    <Route path="/PhotoGallery">
                        <PhotoGallery />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/contact-us">
                        <ContactUs />
                    </Route>
                </Switch>
            </main>
        )
    }
}

export default Main;