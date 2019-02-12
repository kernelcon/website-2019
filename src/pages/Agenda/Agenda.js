import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './Agenda.scss';

import Speakers from './Speakers';
import Talks from './Talks';


class Agenda extends Component {
  static displayName = 'Agenda';

  constructor(props) {
    super(props);
    this.state = {
      defaultTab: 'speakers'
    }
  }

  componentWillMount() {
    const defaultTab = this.props.location.hash ? this.props.location.hash.split('#')[1] : 'speakers';
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
          <Tab tabFor="speakers">Speakers</Tab>
          <Tab tabFor="talks">Talks</Tab>
          <Tab tabFor="schedule">Schedule</Tab>
        </TabList>
        <span>
          <TabPanel tabId="speakers">
            <Speakers />
          </TabPanel>
          <TabPanel tabId="talks">
            <Talks />
          </TabPanel>
          <TabPanel tabId="schedule">
            <h1>Schedule</h1>
            <h3>Coming Soon...</h3>
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
