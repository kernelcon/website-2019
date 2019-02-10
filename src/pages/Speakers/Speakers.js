import React, { Component } from 'react';
import Individuals from './Individuals';

import davek from '../../static/images/davek.png';
import viss from '../../static/images/viss.png';

import speakerConfig from 'speakerConfig';
import './Speakers.scss';

class Speakers extends Component {
  static displayName = 'Speakers';

  constructor(props) {
    super(props);
    this.state = {}
  }

  getRandomKernel(lengthOfArray, indexToExclude, secondLastKernelIndex) {
    // This function just grabs a random index that wasn't one of the last two.
    // Obviously, due to math, you need to send in at least an array of length 3.
    let rand = null;

    while (rand === null || rand === indexToExclude || rand === secondLastKernelIndex) {
      rand = Math.round(Math.random() * (lengthOfArray - 1));
    }
    return rand;
  }

  getSpeakers() {
    // Order Alphabetically
    const speakers = speakerConfig.sort((a,b) => (a.speaker > b.speaker) ? 1 : ((b.speaker > a.speaker) ? -1 : 0));
    
    // Because of the way I stack two per row, get a new kernel that's not it's neighbor either up or down.
    let lastKernelIndex = 99;
    let secondLastKernelIndex = 100;
    const speakerGroup = speakers.map((ele, idx) => {
      const randKernel = this.getRandomKernel(5, lastKernelIndex, secondLastKernelIndex);
      secondLastKernelIndex = lastKernelIndex;
      lastKernelIndex = randKernel;

      // If image DNE, assign the random kernel we've generated.
      const img = ele.image ? ele.image : randKernel;
      console.log(ele);
      console.log(img);

      return (
        <Individuals key={idx}
          speaker={ele.speaker} 
          company={ele.company}
          twitter={ele.twitter}
          image={ele.image}
          bio={ele.bio}
        />
      )
    });

    return speakerGroup;
  }

  render() {
    const speakers = this.getSpeakers();
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Keynotes</h1>
            <div className='keynote-section'>
              <div className='keynote-text-area'>
                <h2>David Kennedy</h2>
                <h3 className='bio-title'>
                  <a href='https://www.trustedsec.com/'
                    target='_blank'
                    rel='noopener noreferrer'>TrustedSec</a>
                  <a href='https://twitter.com/HackingDave'
                    target='_blank'
                    rel='noopener noreferrer'>@HackingDave</a>
                </h3>
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
            <div className='keynote-section keynote-reversed'>
              <div className='keynote-text-area'>
                <img src={viss}
                  alt='Dan Tentler'
                  width='240'/>
              </div>
              <div className='keynote-image-area'>
                <h2>Dan Tentler</h2>
                <h3 className='bio-title'>
                  <a href='https://phobos.io/'
                    target='_blank'
                    rel='noopener noreferrer'>Phobos Group</a>
                  <a href='https://twitter.com/Viss'
                    target='_blank'
                    rel='noopener noreferrer'>@Viss</a>
                </h3>
                <p className='bio-text'>Dan Tentler is the Executive Founder of Phobos Group. He's got a long history of both attack and defense roles, as well as public speaking engagements and press interviews. He is a professional troublemaker and gets excited about getting on stage to share stories about troublemaking, and tips on how to make trouble.</p>
              </div>
            </div>
          </div>
          <div className='speaker-section'>
            <h1 className='title'>Speakers</h1>
            <div className='speakers'>
              {speakers}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
