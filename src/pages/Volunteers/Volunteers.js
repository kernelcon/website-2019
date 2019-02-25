import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import './Volunteers.scss';

class Volunteers extends Component {
  static displayName = 'Volunteers';
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Volunteers</h1>
            <div className='tagline'>Thanks to the overwhelming response Kernelcon is filled up on volunteers for 2019.  We would still love to have you and hope to see you there!</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Volunteers;
