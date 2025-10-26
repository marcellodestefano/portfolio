import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {About} from './components/pages/About';
import {Home} from './components/pages/Home';
import {Projects} from './components/pages/Projects';
import {Contact} from './components/pages/Contact';
import {Footer} from './components/Footer';
import {Studies} from './components/pages/Studies';
import {Work} from './components/pages/Work';
import {Skills} from './components/pages/Skills';


function App() {


  return (
    <>
    <div className="my_container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/studies" element={<Studies />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/work" element={<Work />}/>


      </Routes>
      
      </div>
      <Footer />
    </>
  );
}

export default App;


