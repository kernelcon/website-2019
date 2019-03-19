import React, { Component } from 'react';

import './Agenda.scss';

class ConSchedule extends Component {
  static displayName = 'ConSchedule';

  constructor(props) {
    super(props);
    this.state = {
      showThursday: false,
      showFriday: true,
      showSaturday: false
    };
  }

  static propTypes = {};
  static defaultProps = {};

  changeTab(id) {
    window.location.reload(false); 
  }

  toggleDate(date) {
    if (date === 'Friday') {
      this.setState({
        showFriday: true,
        showSaturday: false,
        showThursday: false
      });
    } else if (date === 'Thursday') {
      this.setState({
        showFriday: false,
        showSaturday: false,
        showThursday: true
      });
    } else {
      this.setState({
        showFriday: false,
        showSaturday: true,
        showThursday: false
      });
    }
  }

  render() {
    const day = this.state.showFriday ? 'Friday ' : this.state.showThursday ? 'Thursday ' : 'Saturday ';
    return (
      <div className='con-schedule-tabs'>
        <ul className='con-sched-tabs'>
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Thursday')}}
                  name='con-sched1-tabs'
                  id='con-sched1'
                  checked={this.state.showThursday} />
                <label htmlFor='con-sched1'>Thursday<span>4</span></label>
            </li>
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Friday')}}
                  name='con-sched2-tabs'
                  id='con-sched2'
                  checked={this.state.showFriday} />
                <label className='middleLabel' htmlFor='con-sched2'>Friday<span>5</span></label>
            </li>
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Saturday')}}
                  name='con-sched3-tabs'
                  id='con-sched3' 
                  checked={this.state.showSaturday} />
                <label htmlFor='con-sched3'>Saturday<span>6</span></label>
            </li>
        </ul>
        {this.state.showThursday && 
          <div className="grid-wrapper-thursday">
            <div className="schedule">{`${day}Conference Schedule`}</div>
            <div className="track">Registration</div>
            <a><div className="box">
              <span className="talk-time">1500</span>
              <span>Registration Open from 1500 to 1730</span>
            </div></a>
          </div>
        }

        {this.state.showFriday && 
          <div className="grid-wrapper-friday">
            <div className="schedule both-tracks">{`${day}Conference Schedule`}</div>
            <div className="track">Fearless Coyote</div>
            <div className="track">Stable Penguin</div>
            <div className="track">Jurassic CTF</div>
            <div className="track">Villages</div>
            <div className="track">Village Classroom</div>
            <a className="morn-mult-rows"><div className="box">
              <span className="talk-time">0800</span>
              <span>Build Your Own Microcontroller Multi-Tool</span>
            </div></a>
            <a className="morn-mult-rows"><div className="box">
              <span className="talk-time">0800</span>
              <span>Network Analysis Workshop</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0900</span>
              <span>CTF Kickoff</span>
            </div></a>
            <a className="ctf-mult-rows"><div className="box">
              <span className="talk-time">0915</span>
              <span>CTF</span>
            </div></a>
            <a className="villages-mult-rows"><div className="box">
              <span className="talk-time">0900</span>
              <span>
                <ul className='villages'>
                  <li>Lock Picking Village</li>
                  <li>Hardware Hacking Village</li>
                  <li>Chillout Village</li>
                </ul>
              </span>
            </div></a>
            <a className='wifi-kickoff'><div className="box">
              <span className="talk-time">0900</span>
              <span>WiFi Kickoff</span>
            </div></a>
            <a className='morn-open'><div className="box">
              <span className="talk-time">1000</span>
              <span>Open</span>
            </div></a>
            <a className="two-tracks"><div className="box">
              <span className="talk-time">1200</span>
              <span>Break for Lunch</span>
            </div></a>
            <a className="after-mult-rows"><div className="box">
              <span className="talk-time">1300</span>
              <span>Build Your Own Microcontroller Multi-Tool</span>
            </div></a>
            <a className="after-mult-rows"><div className="box">
              <span className="talk-time">1300</span>
              <span>Network Analysis Workshop</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1300</span>
              <span>An Introduction to Hardware Hacking and IOT</span>
            </div></a>
            <a className='iot-faq'><div className="box">
              <span className="talk-time">1400</span>
              <span>IOT Questions and Setup</span>
            </div></a>
            <a className='iot-2'><div className="box">
              <span className="talk-time">1500</span>
              <span>An Introduction to Hardware Hacking and IOT</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1600</span>
              <span>Open</span>
            </div></a>
          </div>
        }

        {this.state.showSaturday &&
          <div className="grid-wrapper-saturday">
            <div className="schedule both-tracks">{`${day}Conference Schedule`}</div>
            <div className="track">Fearless Coyote</div>
            <div className="track">Stable Penguin</div>
            <div className="track">Jurassic CTF</div>
            <div className="track">Villages</div>
            <div className="track">Village Classroom</div>
            <a className="morn-mult-rows"><div className="box">
              <span className="talk-time">0800</span>
              <span>Build Your Own Microcontroller Multi-Tool</span>
            </div></a>
            <a className="morn-mult-rows"><div className="box">
              <span className="talk-time">0800</span>
              <span>Network Analysis Workshop</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0800</span>
              <span>Closed</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">0900</span>
              <span>CTF Kickoff</span>
            </div></a>
            <a className="ctf-mult-rows"><div className="box">
              <span className="talk-time">0915</span>
              <span>CTF</span>
            </div></a>
            <a className="villages-mult-rows"><div className="box">
              <span className="talk-time">0900</span>
              <span>
                <ul className='villages'>
                  <li>Lock Picking Village</li>
                  <li>Hardware Hacking Village</li>
                  <li>Chillout Village</li>
                </ul>
              </span>
            </div></a>
            <a className='wifi-kickoff'><div className="box">
              <span className="talk-time">0900</span>
              <span>WiFi Kickoff</span>
            </div></a>
            <a className='morn-open'><div className="box">
              <span className="talk-time">1000</span>
              <span>Open</span>
            </div></a>
            <a className="two-tracks"><div className="box">
              <span className="talk-time">1200</span>
              <span>Break for Lunch</span>
            </div></a>
            <a className="after-mult-rows"><div className="box">
              <span className="talk-time">1300</span>
              <span>Build Your Own Microcontroller Multi-Tool</span>
            </div></a>
            <a className="after-mult-rows"><div className="box">
              <span className="talk-time">1300</span>
              <span>Network Analysis Workshop</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1300</span>
              <span>An Introduction to Hardware Hacking and IOT</span>
            </div></a>
            <a className='iot-faq'><div className="box">
              <span className="talk-time">1400</span>
              <span>IOT Questions and Setup</span>
            </div></a>
            <a className='iot-2'><div className="box">
              <span className="talk-time">1500</span>
              <span>An Introduction to Hardware Hacking and IOT</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1600</span>
              <span>Open</span>
            </div></a>
          </div>
        }
      </div>
    )
  }
}

export default ConSchedule;


