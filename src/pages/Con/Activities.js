import React, { Component } from 'react';

import Event from './Event';
import activitiesConfig from 'activitiesConfig';
import './Con.scss';

class Activities extends Component {
  static displayName = 'Activities';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const events = activitiesConfig.map((ele, idx) => {
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
        {events}
      </span>
    );
  }
}

export default Activities;
