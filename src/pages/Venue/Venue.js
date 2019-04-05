import React, { Component } from 'react';
import Button from '../../components/Button/Button';

import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './Venue.scss';

import logo from '../../static/images/embassy-suites.png';
import venue from '../../static/images/room_map_black.png';
import atrium from '../../static/images/atrium.jpg';
import bedroom from '../../static/images/bedroom.jpg';
import bar from '../../static/images/bar.jpg';
import hotel from '../../static/images/embassy-suites-hotel.jpg';
import parking from '../../static/images/parking_map_black.png';


class Venue extends Component {
  static displayName = 'Venue';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'hotel'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'hotel';
    this.setState({
      defaultTab: defaultTab
    });
    //window.history.pushState(this.props.location.pathname, '', `#${defaultTab}`);
  }

  changeTab(tabId) {
    window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
  }

  getTabs(vert) {
    return (
      <Tabs defaultTab={this.state.defaultTab}
        onChange={(tabId) => { this.changeTab(tabId) }}
        vertical={vert}>
        <TabList>
          <Tab tabFor="hotel">Hotel</Tab>
          <Tab tabFor="venue">Venue</Tab>
          <Tab tabFor="amenities">Amenities</Tab>
          <Tab tabFor="omaha">Omaha</Tab>
          <Tab tabFor="parking">Parking</Tab>
        </TabList>
        <TabPanel tabId="hotel">
          <div className='tab-title'>Hotel & Location Information</div>       
          <div className='venue-hotel'>
            <div className='venue-location'>
              <div className='venue-hotel-title'>
                <img src={logo} height="50" alt="hotel-logo"/>
                <div className='venue-hotel-info'>
                  <div className='venue-text'>Embassy Suites by Hilton Omaha Downtown Old Market</div>
                  <div className='hotel-sub-text'>555 South 10th Street, Omaha, Nebraska, 68102, USA</div>
                  <div className='hotel-sub-text'>TEL: +1-402-346-9000</div>
                </div>
              </div>
              <div className='venue-hotel-block'>
               <div className='venue-text'>We have a special Kernelcon room block!</div>
                 <div className='venue-sub-text'>The URL is <a href='http://group.embassysuites.com/KernelCon2019'>http://group.embassysuites.com/KernelCon2019</a>.</div>
                 <div className='venue-sub-text'>When making phone reservations, please use the Hotel Code: <b>OMADT</b> and Group Code: <b>NSC</b>. </div>
              </div>
              <img className='hotel-img' src={hotel} alt="hotel"/>
              <div className="map-container">
                <iframe title="hotel-map"
                  id="hotelMap"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11997.840403876991!2d-95.928505!3d41.255317!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938fa5b998d90d%3A0x5a8be450ef2d97cd!2s555+S+10th+St%2C+Omaha%2C+NE+68102!5e0!3m2!1sen!2sus!4v1530595511583"
                  width="446"
                  height="640"
                  frameBorder="0"
                  allowFullScreen
                  style={{'marginTop':'-150px'}}>
                  Loading...
                </iframe>
              </div>
            </div>
            <div className='venue-reservation' >
              <Button href="http://group.embassysuites.com/KernelCon2019" title="Reserve today!" class="baltic-sea"/>
            </div>
          </div>
        </TabPanel>
        <TabPanel tabId="venue">
          <div className='tab-title'>Venue Setup</div>
          {/* Need to get better picture, maybe draw it in a program instead */}
          <img className='venue-map' src={venue} height="400" alt="venue"/>
        </TabPanel>
        <TabPanel tabId="amenities">
          <div className='tab-title'>Venue Amenities</div>
          <div className='amnenities-list'>
            <div className='venue-hotel-info'>
               <div className='venue-text'>We have a special Kernelcon room block!</div>
               <div className='about-sub-text'>The URL is <a className='gold' href='http://group.embassysuites.com/KernelCon2019'>http://group.embassysuites.com/KernelCon2019</a>.</div>
               <div className='about-sub-text'>When making phone reservations, please use the Hotel Code: <b>OMADT</b> and Group Code: <b>NSC</b>. </div>
            </div>
          </div>
          <div className='amnenities-list'>
            <img src={atrium} height="100" alt="atrium" className='amnenities-col'/>
            <div className='amnenities-col'>
              <div className='hotel-amn-heading'>Atrium</div>
              <div className='hotel-sub-text'>Free Breakfast and room to spread out during the Con.</div>
            </div>
          </div>
          <div className='amnenities-list'>
            <img src={bedroom} height="100" alt="bedroom" className='amnenities-col'/>
            <div className='amnenities-col'>
              <div className='hotel-amn-heading'>Suites</div>
              <div className='hotel-sub-text'>Starting at just $144/night.</div>
            </div>
          </div>
          <div className='amnenities-list'>
            <img src={bar} height="100" alt="bar" className='amnenities-col'/>
            <div className='amnenities-col'>
              <div className='hotel-amn-heading'>Bar</div>
              <div className='hotel-sub-text'>In addition to the available all-day coffee bar, this bar is open for business until midnight.</div>
              <div className='hotel-sub-text'>Hotel guests are invited to a social hour between 5:30 - 7:30pm where Embassy Suites offers complimentary drinks.</div>
            </div>
          </div>
        </TabPanel>
        <TabPanel tabId="omaha">
          <div className='tab-title'>Why Omaha?</div>
          <p className='about-sub-text'>Kernelcon was founded with one goal in mind:</p>
          <p className='venue-hightlight-text'> To be the midwest's premier information security conference.</p>
          <p className='about-sub-text'>Therefore, the event needs to be centrally located, with a large local infosec community. Omaha has three universities certified as Centers of Academic Excellence through the NSA, multiple local cyber security groups such as <a className='gold' href="http://dc402.org" rel="noopener noreferrer" target="_blank">DEF CON 402</a>, <a className='gold' href="https://www.nebraskacert.org/" rel="noopener noreferrer" target="_blank">NebraskaCERT</a>, and <a className='gold' href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/student-involvement/index.php" rel="noopener noreferrer" target="_blank">NULLify</a>, and plenty of opportunities in the information security field.</p>
          <p className='about-sub-text'>Kernelcon will be held in the heart of Omaha’s historic Old Market, alongside the Missouri River.  The Old Market is the hub of Omaha’s nightlife, with excellent bars, breweries, restaurants and shops all around.</p>
          <p className='about-sub-text'>Our venue, the Embassy Suites Omaha, is a quick drive/shuttle ride from Omaha Eppley Airfield.  Omaha is less than a day’s drive from many large cities in the Midwest and is an easy flight from both coasts.  Pack your bags and plan for a trip where the people are friendly, the steaks are fresh, and hacking goes all night.</p>
        </TabPanel>
        <TabPanel tabId="parking">
          <div className='tab-title'>Where to Park</div>
          <p className='about-sub-text'>For the locals:</p>
          <p className='about-sub-text'>We're happy to say that the conference parking is readily available. We've purchased 150 spots down the street from the con, first-come, first-serve. In addition, parking is available at the hotel at $14/day or there is metered parking all along 10th street.</p>
          <img className='parking-map' src={parking} height="400" alt="parking-map"/>
          <p className='about-sub-text'><b>The code for free parking is 555111.</b></p>
          <p className='about-sub-text'><b>If you get a ticket, please give it to Embassy Suites Executive Offices.</b></p>
        </TabPanel>
      </Tabs>
    );
  }




  render() {

    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Venue</h1>
              <MediaQuery minDeviceWidth={1000}>
                {this.getTabs(true)}
              </MediaQuery>
              <MediaQuery maxDeviceWidth={999}>
                {this.getTabs(false)}
              </MediaQuery>
          </div>
        </div>
      </div>
    );
  }

  // _iframeLoaded() {
  //   console.log('loaded');

  //  <IFrame onLoad={this._iframeLoaded}
  //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.4601248802014!2d-95.93069408457829!3d41.25531647927645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938fa5b998d90d%3A0x5a8be450ef2d97cd!2s555+S+10th+St%2C+Omaha%2C+NE+68102!5e0!3m2!1sen!2sus!4v1530081478409"/>
                    

  // }

}

export default Venue;
