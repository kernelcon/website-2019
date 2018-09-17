import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
//import Tabs from 'react-responsive-tabs';

import Competitions from './Competitions';
import Villages from './Villages';
import Workshops from './Workshops';
import './Con.scss';

class Con extends Component {
  static displayName = 'Con';

  getTabs(vert) {
    console.log('vert', vert);
    return (
      <Tabs defaultTab="vertical-tab-one"
        vertical={vert}>
        <TabList>
          <Tab tabFor="vertical-tab-one">Workshops</Tab>
          <Tab tabFor="vertical-tab-two">Villages</Tab>
          <Tab tabFor="vertical-tab-three">Competitions</Tab>
        </TabList>

        <TabPanel tabId="vertical-tab-one">
          <Workshops />
        </TabPanel>
        <TabPanel tabId="vertical-tab-two">
          <Villages />
        </TabPanel>
        <TabPanel tabId="vertical-tab-three">
          <Competitions />
        </TabPanel>
      </Tabs>
    )
  }

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>Con</h1>
              <MediaQuery minDeviceWidth={761}>
                {this.getTabs(true)}
              </MediaQuery>
              <MediaQuery maxDeviceWidth={760}>
                {this.getTabs(false)}
              </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}

export default Con;



