import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/home/Home';
import Newspapers from './components/newspapers/Newspapers';
import Books from './components/books/Books';
import PhotoGallery from './components/photoGallery/PhotoGallery';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div >
      <nav>
        <a href="home">Home</a> {}
        <a href="newspepers">newspepers</a> {}
        <a href="books">books</a> {}
        <a href="photo-gallery">photo-gallery</a> {}
        <a href="about">about</a> {}
        <a href="contact">contact</a> {}
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Home} path="/home" />
          <Route component={Newspapers} path="/newspepers" />
          <Route component={Books} path="/books" />
          <Route component={PhotoGallery} path="/photo-gallery" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </nav>
    </div>
  );
}

export default App;
