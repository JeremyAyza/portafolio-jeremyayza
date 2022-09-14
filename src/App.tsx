import React from 'react';
import './App.css';
import Nav from './Componentes/Nav/Nav';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import Services from './Componentes/Services/Services';
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
      <Services></Services>
      <Portafolio></Portafolio>
      <Contact></Contact>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
