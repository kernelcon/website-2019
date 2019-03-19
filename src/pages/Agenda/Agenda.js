import React, { Component } from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import MediaQuery from 'react-responsive';
import './Agenda.scss';

import Speakers from './Speakers';
import Schedule from './Schedule';
import ConSchedule from './ConSchedule';

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
    this.handleHashChange();
    window.addEventListener('hashchange', this.handleHashChange);
  }
  handleHashChange = () => {
    // given `#speakers/dave` now you have tabName='speakers', speakerHash='dave'
    const [tabName, speakerHash] = window.location.hash.replace('#', '').split('/');
    const tabNamesToWatchFor = [
      'schedule',
      'speakers'
    ];

    if (tabNamesToWatchFor.includes(tabName)) {
      this.setState({
        defaultTab: tabName,
        // pass this.state.speakerHash to <Speakers/> and use this for scrollIntoView in componentDidMount
        speakerHash: speakerHash
      });
    }
  }

  changeTab(tabId) {
    const [currentTabName] = window.location.hash.replace('#', '').split('/');
    // don't push a state if the hash change is what triggered this change in the first place
    if (currentTabName !== tabId) {
      this.setState({
        defaultTab: tabId
      });
      window.history.pushState(this.props.location.pathname, '', `#${tabId}`);
    }
  }

  getTabs(vert) {
    return (
      <Tabs key={this.state.defaultTab}
        defaultTab={this.state.defaultTab}
        onChange={(tabId) => { this.changeTab(tabId) }}
        vertical={vert}>
        <TabList vertical>
          <Tab tabFor="schedule">Talks Schedule</Tab>
          <Tab tabFor="speakers">Speakers</Tab>
          <Tab tabFor="consched">Con Schedule</Tab>
        </TabList>
        <span>
          <TabPanel tabId="schedule">
            <Schedule />
          </TabPanel>
          <TabPanel tabId="speakers">
            <Speakers speakerHash={this.state.speakerHash}/>
          </TabPanel>
          <TabPanel tabId="consched">
            <ConSchedule />
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
