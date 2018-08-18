import React, { Component } from 'react';
import './CallForPapers.scss';

class CallForPapers extends Component {
  static displayName = 'CallForPapers';

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Call For Papers</h1>
            <div className='text-block'>
              <h3>We can’t have the best con in the region without the best speakers.  We need your help.</h3>
              <p>Do you have something interesting to share with the security community?  Do you have an idea for the next new thing and need to tell the world?</p>
              <p>We’re open to a wide range of topics, including system penetration and exfiltration, defensive security tactics, infosec career advice, digital forensics and incident response, awareness and training techniques, social engineering and human hacking, 0-days and original research.</p>
              <p>Have something outside this list?  No problem.  Submit your talk, we’re excited to hear more.</p>
              <h3>The KernelCon Call for Papers will be opening soon.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallForPapers;
