import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../static/images/kernelcon_w_trans.png';
import './NavBar.scss';

import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars, FaClose } from 'react-icons/lib/fa';

class NavBar extends Component {
  static displayName = 'BackGround';

  static propTypes = {
    bkgColor: PropTypes.string
  };

  static defaultProps = {
    bkgColor: 'transparent'
  };
  render() {
    const divStyle = {
      backgroundColor: this.props.bkgColor
    }
    return (
      <div className='nav-bar'
        style={divStyle}>
        <div className='container'>
          <div className='nav-container'>
            <span className='top-nav'>
              <a href="/">
                <img src={logo} height="30" alt="logo"/>
              </a>
              <span className='nav-date'>
                April 5-6, 2019
              </span>
            </span>
            <div className='nav-menu'>
              <ResponsiveMenu
                menuOpenButton={<FaBars size={30} color="#fff" />}
                menuCloseButton={<FaClose size={30} color="#fff" />}
                changeMenuOn="992px"
                largeMenuClassName="nav-large"
                smallMenuClassName="nav-small"
                menu = {
                  <div className='nav-links'>
                    <a href="/venue">venue</a>  
                    <a href="/dates">dates</a>
                    <a href="/call-for-papers">call for papers</a>
                    <a href="/speakers">speakers</a>
                    <a href="/con">con</a>
                    <a href="/register">register</a>
                    <a href="/sponsors">sponsors</a>
                    <a href="/about">about</a>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

