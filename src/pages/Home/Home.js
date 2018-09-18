import React, { Component } from 'react';
import './Home.scss';

import BackGround from '../../components/BackGround/BackGround';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import bkg from '../../static/images/cameras.jpg';
import logo from '../../static/images/kernelcon_b_trans.png';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const modalContentStyle = {
      padding: '0px',
      marginTop: '-100px'
    }
    return (
      <div id='main_hero' className=''>
        <BackGround img={bkg}/>
        <div className='container main-content'>
          <div className='section'>
            <div className='left-section'>
              <div className='updates'>
                <h2>UPDATES</h2>
                <div className='update-text'>
                  <p>Stay up-to-date with the latest news about kernelcon. We will be sharing every step in our process so you know that we are hard at work making this con the best we can!</p>
                  <p>Don't want to browse to this site to get all your news? Sign up for email updates today!</p>
                </div>
                <div className='sign-up-btn'>
                  <Button onClick={this.toggleModal} href="#" title="Sign Up" />
                </div>
              </div>
              <Modal show={this.state.isOpen}
                onClose={this.toggleModal}
                title='Subscribe for Updates'
                modalContentStyle={modalContentStyle}
                height='420'
                width='500'>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScBplS_8WifTAZMQJ802Djd05wEm9xywlwOWY963tplDdZz9g/viewform?embedded=true"
                    title="sign-up-form"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className='google-form'
                    style={{'marginLeft': '-30px'}}>
                    Loading...
                  </iframe>
              </Modal>
              <div className='twitter-zone'>
                <a class="twitter-timeline" 
                  data-width="360"
                  data-height="500"
                  data-theme="light"
                  href="https://twitter.com/_kernelcon_?ref_src=twsrc%5Etfw">
                  Tweets by _kernelcon_
                </a> 
              </div>
            </div>
            <div className='right-section'>
              <div className='call-out'>
                <img src={logo} 
                  alt="logo"
                  height="60"/>
                <h4 className='gold'>Come check out one of the midwest's premier information security conferences!</h4>
                <div className='popup-section'>
                  <ul className='popup-list'>
                    <li className='popup-items'>
                      <div className='popup-icon-col'>
                        <svg className='popup-icons'
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="200"
                          height="auto">
                          <title>messages-people-person-bubble-oval</title>
                          <path className="svg-stroke svg-gold" d="M13.5,9.5h1v2l2.5-2h2a4.5,4.5,0,0,0,0-9H13A4.5,4.5,0,0,0,8.5,5"/>
                          <path className="svg-stroke svg-gold" d="M.5,23.5a8.719,8.719,0,0,1,.7-3.322c.49-.981,2.539-1.661,5.111-2.613.695-.258.581-2.074.273-2.413a5.127,5.127,0,0,1-1.336-3.978A3.354,3.354,0,0,1,8.5,7.5a3.354,3.354,0,0,1,3.256,3.674,5.127,5.127,0,0,1-1.336,3.978c-.308.339-.422,2.155.273,2.413,2.572.952,4.621,1.632,5.111,2.613a8.719,8.719,0,0,1,.7,3.322Z"/>
                          <path className="svg-fill-gold" d="M19,4.25a.75.75,0,1,0,.75.75A.75.75,0,0,0,19,4.25Z"/>
                          <path className="svg-fill-gold" d="M16,4.25a.75.75,0,1,0,.75.75A.75.75,0,0,0,16,4.25Z"/>
                          <path className="svg-fill-gold" d="M13,4.25a.75.75,0,1,0,.75.75A.75.75,0,0,0,13,4.25Z"/>
                        </svg>
                      </div>
                      <div className='popup-writeup'>
                        <div className='popup-heading'>Great speakers</div>
                        <div className='popup-text'>We are bringing in some of information security's top talents from across the nation. Plus learn from and network with some of Omaha's best speakers!</div>
                      </div>
                    </li>
                    <li className='popup-items'>
                      <div className='popup-icon-col'>
                        <svg className='popup-icons'
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="62.23"
                          height="auto">
                          <title>wench-double</title>
                          <path className="svg-stroke svg-gold" d="M23.146,2.854,21,5H19V3L21.146.854a4,4,0,0,0-5.292,5.292L6.146,15.854A4,4,0,0,0,.854,21.146L3,19H5v2L2.854,23.146a4,4,0,0,0,5.292-5.292l9.708-9.708a4,4,0,0,0,5.292-5.292Z"/>
                          <path className="svg-stroke svg-gold" d="M12,10,8.146,6.146A4,4,0,0,0,2.854.854L5,3V5H3L.854,2.854A4,4,0,0,0,6.146,8.146L10,12"/>
                          <path className="svg-stroke svg-gold" d="M12,14l3.854,3.854a4,4,0,0,0,5.292,5.292L19,21V19h2l2.146,2.146a4,4,0,0,0-5.292-5.292L14,12"/>
                        </svg>
                      </div>
                      <div className='popup-writeup'>
                        <div className='popup-heading'>Excellent workshops</div>
                        <div className='popup-text'>
                          <div className='popup-flavor-text'>Level up your con with training!</div>
                        </div>
                        <div className='popup-text'>
                          <ul className='workshop-items'>
                            <li>Hardware Hacking Village</li>
                            <li>Lock Pick Village</li>
                            <li>Resume Clinic</li>
                            <li>And much more!</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className='popup-items'>
                      <div className='popup-icon-col'>
                        <svg className='popup-icons'
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="191"
                          height="auto">
                          <title>laptop-smiley-1</title>
                          <path className="svg-stroke svg-gold" d="M8.5,16.5c0,1.105,1.567,2,3.5,2s3.5-.895,3.5-2h5V5.167A1.667,1.667,0,0,0,18.833,3.5H5.167A1.667,1.667,0,0,0,3.5,5.167V16.5Z"/>
                          <path className="svg-stroke svg-gold" d="M15.5,16.5c0,1.105-1.567,2-3.5,2s-3.5-.895-3.5-2H.5a5.281,5.281,0,0,0,5.123,4H18.377a5.281,5.281,0,0,0,5.123-4Z"/>
                            <line className="svg-stroke svg-gold" x1="9.5" y1="7.5" x2="9.5" y2="9.5"/>
                            <line className="svg-stroke svg-gold" x1="14.5" y1="7.5" x2="14.5" y2="9.5"/>
                          <path className="svg-stroke svg-gold" d="M16,12a6.083,6.083,0,0,1-8,0"/>
                        </svg>
                      </div>
                      <div className='popup-writeup'>
                        <div className='popup-heading'>Good activities</div>
                        <div className='popup-text'>
                          <div className='popup-flavor-text'>Want to experience the con your own way?</div>
                        </div>
                        <div className='popup-text'>Check out one or more of our many activites! Kernelcon is hosting a WiFi Fox and Hound Competition, Tech Olympics, Workshops and much, much more.</div>
                      </div>
                    </li>
                    <li className='popup-items'>
                      <div className='popup-icon-col'>
                        <svg className='popup-icons'
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="62.23"
                          height="auto">
                          <title>programming-flag</title>
                          <line className="svg-stroke-flag svg-gold" x1="0.5" y1="23.5" x2="0.5" y2="0.5"/>
                          <path className="svg-stroke-flag svg-gold" d="M.5,18.511l3.224-.992a9.83,9.83,0,0,1,8.039,1.023,9.823,9.823,0,0,0,7.849,1.08l3.054-.873a1.149,1.149,0,0,0,.834-1.105V4.484a1.15,1.15,0,0,0-1.466-1.1l-2.422.692a9.831,9.831,0,0,1-7.849-1.08A9.822,9.822,0,0,0,3.724,1.968L.5,2.96Z"/>
                          <polyline className="svg-stroke-prog svg-gold" points="15.5 7.5 18.5 10.5 15.5 13.5"/>
                          <polyline className="svg-stroke-prog svg-gold" points="8.5 7.5 5.5 10.5 8.5 13.5"/>
                          <line className="svg-stroke-prog svg-gold" x1="13" y1="7.5" x2="11" y2="13.5"/>
                        </svg>
                      </div>
                      <div className='popup-writeup'>
                        <div className='popup-heading'>Awesome Capture-the-Flag Event</div>
                        <div className='popup-text'>
                          <div className='popup-flavor-text'>Are you as competitive as we are?</div>
                        </div>
                        <div className='popup-text'>Check out our CTF Event. We have challenges for all levels of experience!</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;