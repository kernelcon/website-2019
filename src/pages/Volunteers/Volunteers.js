import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

import './Volunteers.scss';

class Volunteers extends Component {
  static displayName = 'Volunteers';
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
            <h1 className='title'>Volunteers</h1>
            <div className='tagline'>Interested in being a part of the Kernelcon Crew?</div>
            <div className='call-to-order'>Use the link below to add yourself to our growing list of volunteers.  More details to follow in the coming weeks!  Accepted volunteers receive guaranteed swag, special Kernelcon Crew t-shirt, and other exclusive gear!</div>

            <Button onClick={this.toggleModal} href="#" title="Sign Up" class="baltic-sea volunteer-btn"/>

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

export default Volunteers;
