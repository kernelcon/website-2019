import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <span className='event-author'>
          <Link to={`/bio?id=${ele.id}`}>
            {ele.name}
          </Link>
        </span>
      )
    });

    const authorGroup = (
      <div className='event-author-list'>
        {authorList}
      </div>
    );

    const eventClassName = this.props.leftCol ? 'event-left' : '';

    return (
      <div className='event'>
        <div className={eventClassName}>
          <div className='tab-title'>
            {this.props.title}
          </div>
          {authorList && <div className='event-authors'>
            {authorGroup}
          </div>}
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
      </div>
    );
  }
}

export default Event;



