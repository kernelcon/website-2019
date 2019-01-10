import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
//import Tabs from 'react-responsive-tabs';

import Activities from './Activities';
import Competitions from './Competitions';
import Villages from './Villages';
import Workshops from './Workshops';
import './Con.scss';

class Con extends Component {
  static displayName = 'Con';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'workshops'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'workshops';
    this.setState({
      defaultTab: defaultTab
    });
    window.history.pushState(this.props.location.pathname, '', `#${defaultTab}`);
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
          <Tab tabFor="workshops">Workshops</Tab>
          <Tab tabFor="villages">Villages</Tab>
          <Tab tabFor="competitions">Competitions</Tab>
          <Tab tabFor="activities">Activities</Tab>
        </TabList>

        <TabPanel tabId="workshops">
          <Workshops />
        </TabPanel>
        <TabPanel tabId="villages">
          <Villages />
        </TabPanel>
        <TabPanel tabId="competitions">
          <Competitions />
        </TabPanel>
        <TabPanel tabId="activities">
          <Activities />
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



