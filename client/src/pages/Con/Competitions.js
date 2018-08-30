import React, { Component } from 'react';

import Event from './Event';
import competitionConfig from 'competitionConfig';
import './Con.scss';

class Competitions extends Component {
  static displayName = 'Competitions';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const events = competitionConfig.map((ele, idx) => {
      return (
        <Event key={`${ele.title}-${idx}`}
          title={ele.title}
          author={ele.author}
          bullets={ele.extra}
          description={ele.description} />
      );
    }); 

    return (
      <span>
        <div className='tab-title'>Competitions</div>
        {events}
      </span>
    );
  }
}

export default Competitions;
