import React from 'react';
import './Header.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Main/Home.js';
import Newspapers from '../Main/Newspaers';
import Books from '../Main/Books';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
class Header extends React.Component {

    render() {
        const name = "Литературен глас";
        const home = "Home";
        const publishedEditions = "Печатни издания";
        const newspapers = "Вестници";
        const books = "Книги и литературни произведения";
        const photoGallery = "Фото галерия";
        const forUs = "За нас";
        const contacts = "Контакти";

        return (
            <header>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/home">{name}</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/home">{home}</Nav.Link>
                                        <NavDropdown title={publishedEditions} id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/newspapers">{newspapers}</NavDropdown.Item>
                                            <NavDropdown.Item href="/books">{books}</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/photoGallery">{photoGallery}</Nav.Link>
                                        <Nav.Link href="/about-us">{forUs}</Nav.Link>
                                        <Nav.Link href="/contact-us">{contacts}</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route exact path="/newspapers">
                                    <Newspapers />
                                </Route>
                                <Route exact path="/books">
                                    <Books />
                                </Route>
                                <Route exact path="/photoGallery">
                                    <PhotoGallery />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </header>




            // <nav>
            //     <Alert variant="success">
            //     <ul>
            //         <li>
            //             <a href="/">{home}</a>
            //         </li>
            //         <li>
            //             <a href="/publishedEditions">{publishedEditions}</a>
            //             <ul>
            //                 <li>
            //                     <a href="/newspapers">{newspapers}</a>
            //                 </li>
            //                 <li>
            //                     <a href="/books">{books}</a>
            //                 </li>
            //             </ul>
            //         </li>
            //         <li>
            //             <a href="/photoGallery">{photoGallery}</a>
            //         </li>
            //         <li>
            //             <a href="/contacts">{contacts}</a>
            //         </li>
            //         </ul>
            //     
            // </nav>

        )
    }
}

export default Header;