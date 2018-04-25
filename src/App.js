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
import Journal from "./containers/blog/journal/journal";
import Notebook from "./containers/blog/notebook/notebook";

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
          <Route path="/blog/journal" exact component= { Journal } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
