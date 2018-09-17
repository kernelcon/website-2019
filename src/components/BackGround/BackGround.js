import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackGround.scss';

class BackGround extends Component {
  static displayName = 'BackGround';

  static propTypes = {
    img: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
      <header>
        <div className="header__bg"></div>
      </header>
    );
  }
}

export default BackGround;
