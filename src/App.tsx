import React from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Qualities from './Componentes/Qualities/Qualities';
import Portafolio from './Componentes/Portafolio/Portafolio';
import Contact from './Componentes/Contact/Contact';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      <Home></Home>
      <div className="container">
      <About></About>
      <Qualities></Qualities>
      <Portafolio></Portafolio>
      <Contact></Contact>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
