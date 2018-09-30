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
    leftCol: PropTypes.bool,
    sessions: PropTypes.array
  };

  static defaultProps = {
    title: '',
    author: [],
    bullets: null,
    description: '',
    leftCol: false,
    sessions: []
  };

  getBullets() {
    return this.props.bullets.map((ele, idx) => {
      const sub_bullets = ele.bullets.map((el, id) => {
        return (
          <li className='event-bullet'
            key={`${id}`}>
            {el}
          </li>
        )
      })
      return (
        <ul className='event-bullet-list'>
          <div className='event-bullet-header'>{ele.heading}</div>
          {sub_bullets}
        </ul>
      )
    });
  }

  getSessions() {
    return this.props.sessions.map((ele, idx) => {
      return (
        <div className='session-box'>
          <div className='session-heading'>
            SESSION
          </div>
          <div className='session-text'>{ele.day}</div>
          <div className='session-heading'>
            TIME
          </div>
          <div className='session-text'>{ele.time}</div>
          <div className='session-heading'>
            # SPOTS
          </div>
          <div className='session-text'>{ele.spots}</div>
        </div>
      )
    })
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
          {this.props.bullets && this.getBullets()}
        </div>
        <div className='sessions'>
          {this.props.sessions && this.getSessions()}
        </div>
      </div>
    );
  }
}

export default Event;



