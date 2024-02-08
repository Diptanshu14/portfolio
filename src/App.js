import React from 'react';
// components
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
