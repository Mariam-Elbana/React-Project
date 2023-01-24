import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Index from './Components/Index';
import Contact from './Components/Contact';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Index/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
};

export default App;
