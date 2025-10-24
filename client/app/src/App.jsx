import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {About} from './components/pages/About';
import {Home} from './components/pages/Home';
import {Projects} from './components/pages/Projects';
import {Contact} from './components/pages/Contact';


function App() {


  return (
    <>
    <p>Hello</p>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </>
  );
}

export default App;


