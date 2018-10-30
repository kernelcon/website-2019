import React, { Component } from 'react';
import './Speakers.scss';
import davek from '../../static/images/davek.png';

class Speakers extends Component {
  static displayName = 'Speakers';

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Keynote</h1>
            <div className='keynote-section'>
              <div className='keynote-text-area'>
                <h2>David Kennedy</h2>
                <h3 className='bio-title'>TrustedSec</h3>
                <p className='bio-text'>David Kennedy is the founder of TrustedSec, Binary Defense Systems (BD) and DerbyCon, a large-scale information security conference. David is an avid gamer, father of three, and passionate about coding. David previously was a Chief Security Officer (CSO) for a Fortune 1000 company with offices in over 77 countries.</p>
                <p className='bio-text'>Considered a forward thinker in the security field, he is a keynote speaker at some of the nation’s largest conferences in addition to guest appearances on Fox News, CNN, CNBC, MSNBC, Bloomberg and the BBC. His has advised on several TV shows and assisted in some of the content for the popular “Mr. Robot” series.</p>
                <p className='bio-text'>David has testified in front of US Congress on multiple occasions on the threats faced in security and the government space. A prolific author, he is also the creator of several widely popular open-source tools including “The Social-Engineer Toolkit” (SET). Prior to the private sector, he worked in the United States Marines (USMC) for cyber warfare and forensics analysis activities for the intelligence community including two tours to Iraq.</p>
              </div>
              <div className='keynote-image-area'>
                <img src={davek}
                  alt='Dave Kennedy'
                  width="300" />
              </div>
            </div>
          </div>
          <div className='speaker-section'>
            <h1 className='title'>Speakers</h1>
            <p>Tentative Schedule Announced February 14th, 2019.</p>
            <a className='highlight-text' href="/call-for-papers">Submit to the Call For Papers!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
