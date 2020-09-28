import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Main/Home.js';
import Newspapers from '../Newspaper/Newspapers';
import Books from '../Books/Books';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import NotFound from '../NotFound/NotFound';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={Home} exact path="/home" />
                    <Route component={Newspapers} exact path="/newspapers" />
                    <Route component={Books} exact path="/books" />
                    <Route component={PhotoGallery} exact path="/photo-gallery" />
                    <Route component={AboutUs} exact path="/about" />
                    <Route component={ContactUs} exact path="/contact" />
                    <Route component={NotFound} path="**" />
                </Switch>
            </main>
        )
    }
}

export default Main;