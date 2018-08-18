import React, { Component } from 'react';
import './Dates.scss';

import config from 'config';

class Dates extends Component {
  static displayName = 'Dates';

  render() {

    const dates = config.map((ele, idx) => {
      return (
        <li key={`${ele}-${idx}`}>
          {ele.title}
        </li>
      );
    });

    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Important Dates</h1>
            {dates}
          </div>
        </div>
      </div>
    );
  }
}

export default Dates;





// <div className='dates'>
//               <div className='date-group'>
//                 <div className='date-title'>Conference Dates</div>
//                 <div className='date-description'>KernelCon
//               </div>
//               <p>Call for Papers - Start</p>
//               <p>Call for Papers - Close</p>
//               <p>Workshop Signups Open</p>
//               <p>Speakers Announced</p>
//               <p>Keynotes Announced</p>
//               <p>Schedule Announced</p>
//               <p>CTF Start</p>
//               <p>CTF End</p>
//               <p>Party</p>
//             </div>