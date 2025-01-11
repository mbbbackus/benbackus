import React, { Component } from "react";
import Home from './components/Home';
import About from './components/About';
import Coding from './components/Coding';
import Art from './components/Art';
import Writing from './components/Writing';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/coding" element={<Coding/>} />
          <Route path="/art" element={<Art/>} />
          <Route path="/writing" element={<Writing/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
