import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './Agenda.scss';

import Speakers from './Speakers';
import Schedule from './Schedule';

class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'schedule'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'schedule';
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
        <TabList vertical>
          <Tab tabFor="schedule">Schedule</Tab>
          <Tab tabFor="speakers">Speakers</Tab>
        </TabList>
        <span>
          <TabPanel tabId="schedule">
            <Schedule />
          </TabPanel>
          <TabPanel tabId="speakers">
            <Speakers />
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
            <h1 className='title'>Agenda</h1>
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

export default Agenda;
