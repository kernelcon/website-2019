import React, { Component } from 'react';
import './Sponsors.scss';

class Sponsors extends Component {
  static displayName = 'Sponsors';

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Sponsors</h1>
            <div className='text-block'>
              <p>We understand your products and services play an important part in our security and we can’t put on this conference without your help.  The Omaha metropolitan area is home to 45,000 businesses, including Fortune 500 companies, large financial companies, global technology service providers, the University of Nebraska system, and important U.S. Armed forces operations.  If you’re not already doing business in Omaha, you should be.</p>
              <p>Get your name and product in front of hundreds of security professionals and key decision makers with a KernelCon sponsorship.  We will be happy to work with you on details of your sponsorship, options available and sponsorship fees.</p>
              <p>While we do appreciate our sponsors, please understand that KernelCon is first and foremost for our attendees so we can only accept sponsors who have their best interests in mind.</p>
              <h4>Sponsorships are now available. Please contact <a href="mailto:info@kernelcon.org?Subject=Sponorship" target="_top">info@kernelcon.org</a>.</h4>
            </div>
          </div>
          <div>
            <h1 className='title'>Sponsor a Student</h1>
            <div className='text-block'>
              <p>Interested in sponsoring a student for this year's KernelCon?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsors;
