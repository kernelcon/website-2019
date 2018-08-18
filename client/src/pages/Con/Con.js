import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
//import Tabs from 'react-responsive-tabs';
import './Con.scss';

class Con extends Component {
  static displayName = 'Con';

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Con</h1>
              <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList>
                  <Tab tabFor="vertical-tab-one">Workshops</Tab>
                  <Tab tabFor="vertical-tab-two">Villages</Tab>
                  <Tab tabFor="vertical-tab-three">Competitions</Tab>
                </TabList>


                <TabPanel tabId="vertical-tab-one">
                  <div className='tab-title'>Workshops</div>
                  <ul>
                    <li>Arduino Workshop</li>
                    <li>Network Analysis Workshop</li>
                    <li>Building Control System - Incident Response Workshop</li>
                  </ul>
                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                  <div className='tab-title'>Villages</div>
                  <ul>
                    <li>TOOOL Lockpicking Village</li>
                    <li>Resume Village</li>
                    <li>Chillout Room</li>
                  </ul>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                  <div className='tab-title'>Competitions</div>
                  <ul>
                    <li>Capture-the-Flag Event</li>
                    <li>WiFi Fox and Hound Event</li>
                    <li>Tech Olympics</li>
                    <li>Chillout Room Video Game Competitions</li>
                  </ul>
                </TabPanel>
              </Tabs>

          </div>
        </div>
      </div>
    );
  }
}

export default Con;
