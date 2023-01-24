import React, { Component } from 'react';

import Home from './../Home';
import Work from './../Work';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import About from './../About';
import SocialMedia from './../SocialMedia';
import Footer from './../Footer';

class Index extends Component {
  render () {
    return (
      <div className="App">
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    );
  };
};

export default Index;
