import React, { Component } from 'react';

import './Agenda.scss';

class ConSchedule extends Component {
  static displayName = 'ConSchedule';

  constructor(props) {
    super(props);
    this.state = {
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
        showSaturday: false
      });
    } else {
      this.setState({
        showFriday: false,
        showSaturday: true
      });
    }
  }

  render() {
    const day = this.state.showFriday ? 'Friday ' : 'Saturday ';
    return (
      <div className='schedule-tabs'>
        <ul className='tabs'>
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Friday')}}
                  name='tabs'
                  id='tab1'
                  checked={this.state.showFriday} />
                <label htmlFor='tab1'>Friday<span>5</span></label>
            </li>
          
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Saturday')}}
                  name='tabs'
                  id='tab2' 
                  checked={this.state.showSaturday} />
                <label htmlFor='tab2'>Saturday<span>6</span></label>
            </li>
        </ul>
      </div>
    )
  }
}

export default ConSchedule;


