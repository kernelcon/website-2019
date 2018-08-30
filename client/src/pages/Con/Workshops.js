import React, { Component } from 'react';

import Event from './Event';
import workshopConfig from 'workshopConfig';
import './Con.scss';

class Workshops extends Component {
  static displayName = 'Workshops';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const events = workshopConfig.map((ele, idx) => {
      return (
        <Event key={`${ele.title}-${idx}`}
          title={ele.title}
          author={ele.author}
          bullets={ele.extra}
          description={ele.description} 
          leftCol/>
      );
    }); 

    return (
      <span>
        <div className='tab-title'>Workshops</div>
        {events}
      </span>
    );
  }
}

export default Workshops;
