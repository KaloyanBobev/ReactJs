import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home </Link>
                <Link to="/rooms"> Rooms </Link>
                <Link to="/rooms/:slug"> Single room </Link>
            </nav>
        )
    }
}
