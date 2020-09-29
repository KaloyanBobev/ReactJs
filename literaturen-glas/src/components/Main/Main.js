import React from "react";
import { Route, Switch } from "react-router-dom";

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
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/newspapers" component={Newspapers} />
                    <Route path="/books" component={Books} />
                    <Route path="/photo-gallery" component={PhotoGallery} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/contact" component={ContactUs} />
                    <Route path="**" component={NotFound} />
                </Switch>
            </main>
        )
    }
}

export default Main;