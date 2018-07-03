import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";
import asyncComp from "./hoc/asyncComp";

/*****
 * lazy-loading helper functions
 ****/

//Notebook & Notebook Entries
const asyncNotebook = asyncComp(() => {
  return import('./containers/blog/notebook/notebook');
});

const asyncNe1= asyncComp(() => {
  return import('./containers/blog/notebook/ne/ne1');
});

const asyncNe2= asyncComp(() => {
  return import('./containers/blog/notebook/ne/ne2');
});

const asyncNe3= asyncComp(() => {
  return import('./containers/blog/notebook/ne/ne3');
});

const asyncNe4= asyncComp(() => {
  return import('./containers/blog/notebook/ne/ne4');
});

//Journal & Journal Entries
const asyncJournal = asyncComp(() => {
  return import('./containers/blog/journal/journal');
});

const asyncJe1= asyncComp(() => {
  return import('./containers/blog/journal/je/je1');
});

const asyncJe2= asyncComp(() => {
  return import('./containers/blog/journal/je/je2');
});

const asyncJe3= asyncComp(() => {
  return import('./containers/blog/journal/je/je3');
});

const asyncJe4= asyncComp(() => {
  return import('./containers/blog/journal/je/je4');
});

//Work & Work Entries
const asyncWork = asyncComp(() => {
  return import('./containers/work/work');
});

const asyncWe1 = asyncComp(() => {
  return import('./containers/work/workEntries/we1')
});

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
          <Route path="/work" exact component={ asyncWork } />
            <Route path="/work/we1" exact component= { asyncWe1 } />
          <Route path="/blog/notebook" exact component= { asyncNotebook } />
            <Route path="/blog/notebook/ne/ne1" exact component= { asyncNe1 } />
            <Route path="/blog/notebook/ne/ne2" exact component= { asyncNe2 } />
            <Route path="/blog/notebook/ne/ne3" exact component= { asyncNe3 } />
            <Route path="/blog/notebook/ne/ne4" exact component= { asyncNe4 } />
          <Route path="/blog/journal" exact component= { asyncJournal } />
            <Route path="/blog/journal/je/je1" exact component= { asyncJe1 } />
            <Route path="/blog/journal/je/je2" exact component= { asyncJe2 } />
            <Route path="/blog/journal/je/je3" exact component= { asyncJe3 } />
            <Route path="/blog/journal/je/je4" exact component= { asyncJe4 } />
        </Switch>

        <Footer />
      </div>
    );
  } // render()
} // App
