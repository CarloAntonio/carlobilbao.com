import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";
import Work from "./containers/work/work";

//Notebook & Notebook Entries
import Notebook from "./containers/blog/notebook/notebook";
import Ne1 from "./containers/blog/notebook/ne/ne1";
import Ne2 from "./containers/blog/notebook/ne/ne2";
import Ne3 from "./containers/blog/notebook/ne/ne3";
import Ne4 from "./containers/blog/notebook/ne/ne4";

//Journal & Journal Entries
import Journal from "./containers/blog/journal/journal";
import Je1 from "./containers/blog/journal/je/je1";
import Je2 from "./containers/blog/journal/je/je2";
import Je3 from "./containers/blog/journal/je/je3";
import Je4 from "./containers/blog/journal/je/je4";

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />

        {/* ============================================================
          Handles the routing of the website.
        ============================================================ */}
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
          <Route path="/work" exact component={ Work } />
          <Route path="/blog/notebook" exact component= { Notebook } />
            <Route path="/blog/notebook/ne/ne1" exact component= { Ne1 } />
            <Route path="/blog/notebook/ne/ne1" exact component= { Ne2 } />
            <Route path="/blog/notebook/ne/ne1" exact component= { Ne3 } />
            <Route path="/blog/notebook/ne/ne1" exact component= { Ne4 } />
          <Route path="/blog/journal" exact component= { Journal } />
            <Route path="/blog/journal/je/je1" exact component= { Je1 } />
            <Route path="/blog/journal/je/je2" exact component= { Je2 } />
            <Route path="/blog/journal/je/je3" exact component= { Je3 } />
            <Route path="/blog/journal/je/je4" exact component= { Je4 } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
