import React, { Component } from "react";
import HomePage from './components/HomePage';
import CodePage from './components/CodePage';
import ArtPage from './components/ArtPage';
import WritingPage from './components/WritingPage';
import { tabNames } from "./variables";
import './mysite.css';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/code" component={CodePage} />
        <Route path="/art" component={ArtPage} />
        <Route path="/writing" component={WritingPage} />
      </Router>
    </main>
  );
}

export default App;
