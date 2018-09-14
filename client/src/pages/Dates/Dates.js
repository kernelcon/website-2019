import React, { Component } from 'react';
import './Dates.scss';

import config from 'dateConfig';

class Dates extends Component {
  static displayName = 'Dates';

  render() {

    const dates = config.map((ele, idx) => {
      return (
        <div className='date-box'
          key={`${ele}-${idx}`}>
          <span className='dl-title'>{ele.title}</span>
          {ele.description && <div className='dl-description'>{ele.description}</div>}
          <div className='dl-date'>{ele.date}</div>
        </div>
      );
    });

    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Important Dates</h1>
            <div className='dates-list'>
              {dates}
            </div>
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
//                 <div className='date-description'>Kernelcon
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