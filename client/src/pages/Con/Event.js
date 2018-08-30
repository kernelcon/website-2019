import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Con.scss';

class Event extends Component {
  static displayName = 'Event';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.array,
    bullets: PropTypes.array,
    description: PropTypes.string,
    leftCol: PropTypes.bool
  };

  static defaultProps = {
    title: '',
    author: [],
    bullets: null,
    description: '',
    leftCol: false
  };

  getBullets() {
    return this.props.bullets.map((ele, idx) => {
      return (
        <li className='event-bullet'
          key={`${idx}`}>
          {ele}
        </li>
      )
    });
  }

  render() {
    const authorList = this.props.author.map((ele, idx) => {
      return (
        <div className='event-author-list'
          key={`${idx}`}>
          <div className='event-author'>{ele.name}</div>
          <div className='event-author-bio'>{ele.bio}</div>
        </div>
      )
    });

    const eventClassName = this.props.leftCol ? 'event-left' : '';

    return (
      <div className='event'>
        <div className={eventClassName}>
          <div className='event-title'>
            {this.props.title}
          </div>
          <div className='event-description'>
            {this.props.description}
          </div>
          {this.props.bullets && 
            <ul className='event-bullet-list'>
            <div className='event-bullet-header'>Students in this class will learn:</div>
              {this.getBullets()}
            </ul>
          }
        </div>
        <div className='event-right'>
          {authorList}
        </div>
      </div>
    );
  }
}

export default Event;



