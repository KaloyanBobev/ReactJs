import React from 'react';
import './Header.scss';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import img from "../../images/raphael-schaller-navbar-2.jpg";
import { useTranslation } from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }



    return (
        <div>
            <header>
                <Navbar expand="lg" sticky="top">
                    <Navbar.Brand href="/" className="logo">{t('header.name')}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link href="/home" >{t('header.home')}</Nav.Link>
                            <NavDropdown title={t('header.publishedEditions')} id="basic-nav-dropdown" className="drop-down-menu">
                                <NavDropdown.Item href="/newspapers" >{t('header.newspapers')}</NavDropdown.Item>
                                <NavDropdown.Item href="/books" >{t('header.books')}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/photo-gallery">{t('header.photoGallery')}</Nav.Link>
                            <Nav.Link href="/about" >{t('header.forUs')}</Nav.Link>
                            <Nav.Link href="/contact" >{t('header.contacts')}</Nav.Link>
                        </Nav>
                        <div className="language-btn">
                            <button onClick={() => handleClick('bg')}>
                                Bul
                            </button>
                            <button onClick={() => handleClick('en')}>
                                Eng
                            </button>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

            </header>
            <img className="img-fluid" src={img} alt="navbar background" />
        </div >
    )
}


export default Header;