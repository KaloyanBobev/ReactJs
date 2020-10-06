import React from 'react';
import './Header.scss';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import img from "../../images/raphael-schaller-navbar-2.jpg";

class Header extends React.Component {

    render() {
        const name = "Литературен глас";
        const home = "Начало";
        const publishedEditions = "Печатни издания";
        const newspapers = "Вестници";
        const books = "Книги и литературни произведения";
        const photoGallery = "Фото галерия";
        const forUs = "За нас";
        const contacts = "Контакти";

        return (
            <div>
                <header>
                    <Navbar expand="lg" sticky="top">
                        <Navbar.Brand href="/" className="logo">{name}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                                <Nav.Link href="/home" >{home}</Nav.Link>
                                <NavDropdown title={publishedEditions} id="basic-nav-dropdown" className="drop-down-menu">
                                    <NavDropdown.Item href="/newspapers" >{newspapers}</NavDropdown.Item>
                                    <NavDropdown.Item href="/books" >{books}</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/photo-gallery">{photoGallery}</Nav.Link>
                                <Nav.Link href="/about" >{forUs}</Nav.Link>
                                <Nav.Link href="/contact" >{contacts}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <img className="img-fluid" src={img} alt="navbar background" />
            </div >
        )
    }
}

export default Header;