import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
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
                    {/* <NavLink to="/home" className="text-decoration-none">{home}</NavLink>

                    <NavLink to="/newspapers" className="text-decoration-none">{newspapers}</NavLink>
                    <NavLink to="/books" className="text-decoration-none">{books}</NavLink>
                    <NavLink to="photo-gallery" className="text-decoration-none">{photoGallery}</NavLink>
                    <NavLink to="/about" className="text-decoration-none">{forUs}</NavLink>
                    <NavLink to="/contact" className="text-decoration-none">{contacts}</NavLink> */}
                    <Navbar expand="lg" sticky="top">
                        <Navbar.Brand href="/" className="logo">{name}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto ">
                                <Link to="/home" className="text-decoration-none"><Nav.Link href="/home" >{home}</Nav.Link></Link>
                                <NavDropdown title={publishedEditions} id="basic-nav-dropdown">
                                    <Link to="/newspapers" className="text-decoration-none"><NavDropdown.Item href="/newspapers" >{newspapers}</NavDropdown.Item></Link>
                                    <Link to="/books" className="text-decoration-none"><NavDropdown.Item href="/books" >{books}</NavDropdown.Item></Link>
                                </NavDropdown>
                                <Link to="photo-gallery" className="text-decoration-none"><Nav.Link href="/photo-gallery">{photoGallery}</Nav.Link></Link>
                                <Link to="/about" className="text-decoration-none"><Nav.Link href="/about" >{forUs}</Nav.Link></Link>
                                <Link to="/contact" className="text-decoration-none"><Nav.Link href="/contact" >{contacts}</Nav.Link></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <img className="img-fluid" src={img} alt="navbar background" />
            </div>
        )
    }
}

export default Header;