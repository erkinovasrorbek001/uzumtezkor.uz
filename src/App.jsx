import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Shartnome from './pages/Shartnome/Shartnome'
function App() {
  return (
    <>
      <Wrapper /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/Shartnoma" element={< Shartnome/>} />

      </Routes>
    </>
  );
}

export default App;
