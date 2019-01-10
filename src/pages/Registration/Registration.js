import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import './Registration.scss';

class Registration extends Component {
  static displayName = 'Registration';
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
        <div className='container'>
          <div className='venue-section'>
            <div className='register-section'>
              <h1 className='title'>Register</h1>
              <div className='tagline'>Sign up today for Omaha's inaugural hacker conference.</div>
              <div className='call-to-order'>Be sure to look over our <a href="/con">workshops</a> before going to sign up! Take advantage of early bird pricing while you can!</div>
              <Button href="https://kernelcon.ticketspice.com/kernelcon2019" title="Register Now" class="baltic-sea volunteer-btn"/>
            </div>
            <div>
              <div className='tagline group-line'>Registering as a Group?</div> 
              <p className='call-to-order'>Contact us about our group rates here: <a href="mailto:info@kernelcon.org">info@kernelcon.org</a></p>
            </div>
            
            <div className='volunteer-section'>
              <h1 className='title'>Volunteer</h1>
              <div className='tagline'>Interested in being a part of the Kernelcon Crew?</div>
              <div className='call-to-order'>Use the link below to add yourself to our growing list of Volunteers.  More details to follow in the coming weeks!  In addition to free entry, accepted Volunteers receive guaranteed swag, special Kernelcon Crew t-shirt, and other exclusive gear!</div>
              <Button onClick={this.toggleModal} href="#" title="Sign Up" class="baltic-sea volunteer-btn"/>
            </div>

            <div className='volunteer-section'>
              <h1 className='title'>Students</h1>
              <div className='tagline'>Are you interested in attending Kernelcon, but cannot afford the con?</div>
              <div className='call-to-order'>Students, aged 18 and over, who are interested in applying for this opportunity will need the following:</div>
              <ul>
                <li>Proof that you are a student. Picture at school with your student ID.</li>
                <li>Letter of recommendation from an advisor or instructor from your institution.</li>
                <li>A brief letter of interest, telling us why you are interested in attending Kernelcon and what you hope to learn.</li>
                <li>Lastly, one or both of the letters should be sent from a school email address.</li>
              </ul>
              <div className='call-to-order'>Students should submit the above information along with any questions or concerns to <a className='highlight-text' href="mailto:students@kernelcon.org">students@kernelcon.org</a>. Accepted students will receive admission to the conference, a hotel room (for traveling students), and this year's "hacker education kit".</div>
            </div>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}
              title='Show Your Interest'
              modalContentStyle={modalContentStyle}
              height='520'
              width='500'
              class='volunteer-modal'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScokorBVswuxp5TPARSicBpj3aYv-Y1JipodHZEpuWUKCyJ5Q/viewform?embedded=true"
                  title="volunteer-interest-form"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="google-form"
                  style={{'marginLeft': '-30px'}}>
                  Loading...
                </iframe>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
