import React, { Component } from 'react';
import './Sponsors.scss';
import swlogo from '../../static/images/swlogo.svg';
import fnbo from '../../static/images/fnbo.png';
import fnts from '../../static/images/fnbo2.jpg';
import nttlogo from '../../static/images/ntt-logo.png';
import toool from '../../static/images/toool.svg';
import caglogo from '../../static/images/conagra.png';

class Sponsors extends Component {
  static displayName = 'Sponsors';

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Sponsorship</h1>
            <div className='text-block'>
              <p>We understand your products and services play an important part in our security and we can’t put on this conference without your help.  The Omaha metropolitan area is home to 45,000 businesses, including Fortune 500 companies, large financial companies, global technology service providers, the University of Nebraska system, and important U.S. Armed forces operations.  If you’re not already doing business in Omaha, you should be.</p>
              <p>Get your name and product in front of hundreds of security professionals and key decision makers with a Kernelcon sponsorship.  We will be happy to work with you on details of your sponsorship, options available and sponsorship fees.</p>
              <p>While we do appreciate our sponsors, please understand that Kernelcon is first and foremost for our attendees so we can only accept sponsors who have their best interests in mind.</p>
              <h4>Sponsorships are now available. Please contact <a href="mailto:sponsor@kernelcon.org?Subject=Sponorship" target="_top">sponsor@kernelcon.org</a>.</h4>
            </div>
          </div>
          <div>
            <h1 className='title'>Sponsor a Student</h1>
            <div className='text-block'>
              <h4>Interested in sponsoring a student for this year's Kernelcon?</h4>
              <p>With your assistance, Kernelcon hopes to sponsor up to 50 students this year. In addition to entry for you, your money will help pay for a student’s admission, hotel room (for traveling students), and this year’s “hacker education kit”.</p>
              <h4 className='no-margin-bottom'>Would you like to hear more?  Please contact <a href="mailto:sponsor@kernelcon.org?Subject=Sponorship" target="_top">sponsor@kernelcon.org</a>.</h4>  
            </div>
          </div>
          <div className='spons-block'>
            <h1 className='title'>2019 Sponsors</h1>
            <div className='text-block'>
              <p>We would like to thank all of our sponsors who make Kernelcon the best it can be.  Without our sponsors, our conference wouldn't happen.</p>
            </div>
            <div className='text-block spons-groups'>
              <h3 className='gold'>Gold</h3>
              <a href="https://www.secureworks.com/"
                target="_blank"
                rel='noopener noreferrer'>
                <img src={swlogo}
                  className='spons-img gold-spons'
                  alt="Secure Works"/>
              </a>
              <div className='two-line'>
                <a href="https://fnbo.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={fnbo}
                    className='spons-img half-gold-spons'
                    alt="First National Bank"/>
                </a>
                <a href="https://www.fnts.com/"
                  target="_blank"
                  rel='noopener noreferrer'>
                  <img src={fnts}
                    className='spons-img half-gold-spons'
                    alt="First National Technology Solutions"/>
                </a>
              </div>
              {/* <h3 className='gold'>Silver</h3> */}
              <h3 className='gold'>Bronze</h3>
              <a href="https://www.conagrabrands.com/"
                target="_blank"
                rel='noopener noreferrer'>
                <img src={caglogo}
                  className='spons-img other-spons'
                  alt="ConAgra"/>
              </a>

              <h4 className='gold'>Party Sponsor</h4>
              <a href="https://www.nttsecurity.com/en-us"
                target="_blank"
                rel='noopener noreferrer'>
                <img src={nttlogo}
                  className='spons-img other-spons'
                  alt="NTT Security"/>
              </a>
              <h4 className='gold'>Other Sponsors</h4>
              <a href="https://toool.us/"
                target="_blank"
                rel='noopener noreferrer'>
                <img src={toool}
                  className='spons-img other-spons'
                  alt="TOOOL"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;




