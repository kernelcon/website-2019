import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header className='nav-bar'>
        <div className='container'>
          <div className='nav-links'>
            <a href="#">kernelcon</a>
            <a href="#">sponsors</a>
            <a href="#">con</a>
            <a href="#">schedule</a>
            <a href="#">speakers</a>
            <a href="#">registration</a>
            <a href="#">volunteers</a>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
