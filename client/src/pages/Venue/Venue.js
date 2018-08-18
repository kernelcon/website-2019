import React, { Component } from 'react';

import IFrame from '../../components/IFrame/IFrame';
import Button from '../../components/Button/Button';

import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import './Venue.scss';
import logo from '../../static/images/embassy-suites.png';
import venue from '../../static/images/venue.jpg';
import atrium from '../../static/images/atrium.jpg';
import bedroom from '../../static/images/bedroom.jpg';
import pool from '../../static/images/pool.jpg';
import bar from '../../static/images/bar.jpg';
import hotel from '../../static/images/embassy-suites-hotel.jpg';


class Venue extends Component {
  static displayName = 'Venue';

  // componentDidMount() {
  //   if (document.getElementsByClassName('place-card').length > 0) {
  //     document.getElementsByClassName('place-card')[0].style.display="none"
  //   } else {
  //     console.log('did not work')
  //   }
  // }

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Venue</h1>

              <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList>
                  <Tab tabFor="vertical-tab-one">Hotel</Tab>
                  <Tab tabFor="vertical-tab-two">Venue</Tab>
                  <Tab tabFor="vertical-tab-three">Amenities</Tab>
                  <Tab tabFor="vertical-tab-four">Omaha</Tab>
                  <Tab tabFor="vertical-tab-five">Parking</Tab>
                </TabList>


                <TabPanel tabId="vertical-tab-one">
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
                      <img src={hotel} height="150" alt="hotel"/>
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
                    <div className='venue-reservation'>

                      <Button href="#" title="Reserve today!" class="baltic-sea"/>
                      

                    </div>
                  </div>




                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                  <div className='tab-title'>Venue Setup</div>
                  {/* Need to get better picture, maybe draw it in a program instead */}
                  <img src={venue} height="400" alt="venue"/>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                  <div className='tab-title'>Venue Amenities</div>
                  <div className='amnenities-list'>
                    <img src={atrium} height="100" alt="atrium" className='amnenities-col'/>
                    <div className='amnenities-col'>
                      <div className='venue-sub-text'>Atrium</div>
                      <div className='hotel-sub-text'>Free Breakfast and room to spread out during the Con.</div>
                    </div>
                  </div>
                  <div className='amnenities-list'>
                    <img src={bedroom} height="100" alt="bedroom" className='amnenities-col'/>
                    <div className='amnenities-col'>
                      <div className='venue-sub-text'>Suites</div>
                      <div className='hotel-sub-text'>Starting at just $144/night.</div>
                    </div>
                  </div>
                  <div className='amnenities-list'>
                    <img src={bar} height="100" alt="bar" className='amnenities-col'/>
                    <div className='amnenities-col'>
                      <div className='venue-sub-text'>Bar</div>
                      <div className='hotel-sub-text'>In addition to the available all-day coffee bar, this bar is open for business until midnight.</div>
                      <div className='hotel-sub-text'>Hotel guests are invited to a social hour between 5:30 - 7:30pm where Embassy Suites offers complimentary drinks.</div>
                    </div>
                  </div>
                  <div className='amnenities-list'>
                    <img src={pool} height="100" alt="pool" className='amnenities-col'/>
                    <div className='amnenities-col'>
                      <div className='venue-sub-text'>Other</div>
                      <div className='hotel-sub-text'>Pool.</div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel tabId="vertical-tab-four">
                  <div className='tab-title'>Why Omaha?</div>
                  <p className='venue-sub-text'>KernelCon was founded with one goal in mind:</p>
                  <p className='venue-hightlight-text'> To be the midwest's premier information security conference.</p>
                  <p className='venue-sub-text'>Therefore, the event needs to be centrally located, with a large local infosec community. Omaha has three universities certified as Centers of Academic Excellence through the NSA, multiple local cyber security groups such as <a href="http://dc402.org" target="_blank">DEF CON 402</a>, <a href="https://www.nebraskacert.org/" target="_blank">NebraskaCERT</a>, and <a href="https://www.unomaha.edu/college-of-information-science-and-technology/school-of-interdisciplinary-informatics/student-involvement/index.php" target="_blank">NULLify</a>, and plenty of opportunities in the information security field.</p>
                  <p className='venue-sub-text'>KernelCon will be held in the heart of Omaha’s historic Old Market, alongside the Missouri River.  The Old Market is the hub of Omaha’s nightlife, with excellent bars, breweries, restaurants and shops all around.</p>
                  <p className='venue-sub-text'>Our venue, the Embassy Suites Omaha, is a quick drive/shuttle ride from Omaha Eppley Airfield.  Omaha is less than a day’s drive from many large cities in the Midwest and has is an easy flight from both coasts.  Pack your bags and plan for a trip where the people are friendly, the steaks are fresh, and hacking goes all night.</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-five">
                  <div className='tab-title'>Where to Park</div>
                  <p className='venue-sub-text'>For the locals:</p>
                  <p className='venue-sub-text'>We're happy to say that the conference parking is readily available.</p>
                </TabPanel>
              </Tabs>

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
