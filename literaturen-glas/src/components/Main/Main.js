import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Main/Home.js';
import Newspapers from '../Newspaper/Newspapers';
import Books from '../Books/Books';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={Home} path="/home" />
                    <Route component={Newspapers} path="/newspapers" />
                    <Route component={Books} path="/books" />
                    <Route component={PhotoGallery} path="/photo-gallery" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={ContactUs} path="/contact" />
                </Switch>
            </main>
        )
    }
}

export default Main;