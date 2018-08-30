import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './About.scss';

import CodeOfConduct from '../../components/CodeOfConduct/CodeOfConduct';

class About extends Component {
  static displayName = 'About';

  getTabs(vert) {
    return (
      <Tabs defaultTab="vertical-tab-one"
        vertical={vert}>
        <TabList vertical>
          <Tab tabFor="vertical-tab-one">Kernelcon</Tab>
          <Tab tabFor="vertical-tab-two">Code Of Conduct</Tab>
          <Tab tabFor="vertical-tab-three">Contact</Tab>
        </TabList>
        <span>
          <TabPanel tabId="vertical-tab-one">
            <div className='tab-title'>About Kernelcon</div>
            <p className='venue-sub-text'>Kernelcon is the result of many motivated information security professionals who recognized the opportunity to create an awesome security conference in Omaha.  The idea for Kernelcon started within the local DEF CON Group, DC402, with lots of help from other members of other local security groups such as NebraskaCERT and OWASP.  We are inspired by many other conferences including DEF CON, DerbyCon, ShmooCon, etc., and wanted to bring those same experiences to the Mid-West here in Omaha.</p>
            <p className='venue-sub-text'>Our goal is to make Omaha an annual destination for security professionals around the world that want to have a unique conference experience.</p>
            <p className='venue-sub-text'>We hope you enjoy the conference as much as we did planning it.</p>
          </TabPanel>
          <TabPanel tabId="vertical-tab-two">
            <CodeOfConduct />
          </TabPanel>
          <TabPanel tabId="vertical-tab-three">
            <div className='tab-title'>Stay in Touch</div>
            <p className='venue-sub-text'>info@kernelcon.org</p>
          </TabPanel>
        </span>
      </Tabs>
    );
  }

  render() {
    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <h1 className='title'>About</h1>
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

export default About;
