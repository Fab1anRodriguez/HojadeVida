import React from 'react';
import './App.css';
import Header from './elements/Header';
import Info from './elements/Info';
import Estudios from './elements/Estudios';
import Skills from './elements/Skills';
import SocialMedia from './elements/SocialMedia';
import Footer from './elements/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      
      <div className="container">
          <Info />
        </div>
        <div className="container">
          <Estudios />
        </div>
        <div className="container">
          <Skills />
        </div>
        <div className="container">
          <SocialMedia />
        </div>
        <div>
        <footer className="footer-container">
          <Footer />
        </footer>
        </div>
    </div>
  );
}

export default App;
