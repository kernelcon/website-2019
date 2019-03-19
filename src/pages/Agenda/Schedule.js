import React, { Component } from 'react';

import speakerConfig from 'speakerConfig';
import DonutChart from '../../components/Charts/Donut.js';
import './Agenda.scss';

class Schedule extends Component {
  static displayName = 'Schedule';

  constructor(props) {
    super(props);
    this.state = {
      showFriday: true,
      showSaturday: false
    };
  }

  static propTypes = {};
  static defaultProps = {};

  changeTab(id) {
    window.location.reload(false); 
  }

  getTalks() {
    // Order Alphabetically
    const talksOrdered = speakerConfig.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    
    const talks = talksOrdered.map((ele, idx) => {
      const twitterUrl = ele.twitter.replace('@', '');
      const percentTechnical = (ele.technical / 5) * 100;

      return (
        <div id={ele.talk_id}
          key={idx}
          className='single-talk'>
          <div className='talk-title'>{ele.title}</div>
          <div className='talk-sub-title'>
            <div className='speaker-name'>
              <a onClick={() => {this.changeTab(ele.speaker_id)}}
                href={`#speakers/${ele.speaker_id}`}>{ele.speaker}</a>
            </div>
            {(ele.twitter || ele.github || ele.linkedin) && <div className='speaker-icon-bar'>
              {ele.twitter && <span className='speaker-icons'>
                <a href={`https://twitter.com/${twitterUrl}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='twitter-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='twitter-icon'>Twitter icon</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                  </svg>
                </a>
              </span>}
              {ele.linkedin && <span className='speaker-icons'>
                <a href={`https://www.linkedin.com${ele.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='linkedin-icon'
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title id='linkedin-icon'>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                  </svg>
                </a>
              </span>}
              {ele.github && <span className='speaker-icons'>
                <a href={ele.github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <svg className='speaker-icons'
                    aria-labelledby='github-icon'
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </span>}
            </div>}
            <div className='length'>{`${ele.length} minutes`}</div>
            {ele.technical && <div className='technical'>
              <DonutChart value={percentTechnical} />
              <span className='tech-label'>% technical</span>
            </div>}
          </div>
          <div className='abstract'>
            {ele.abstract}
          </div>
        </div>
      )
    });

    return talks;
  }
  toggleDate(date) {
    if (date === 'Friday') {
      this.setState({
        showFriday: true,
        showSaturday: false
      });
    } else {
      this.setState({
        showFriday: false,
        showSaturday: true
      });
    }
  }

  render() {
    const talks = this.getTalks();
    const day = this.state.showFriday ? 'Friday ' : 'Saturday ';
    return (
      <div className='schedule-tabs'>
        <ul className='tabs'>
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Friday')}}
                  name='tabs'
                  id='tab1'
                  checked={this.state.showFriday} />
                <label htmlFor='tab1'>Friday<span>5</span></label>
            </li>
          
            <li>
                <input type='radio'
                  onChange={() => {this.toggleDate('Saturday')}}
                  name='tabs'
                  id='tab2' 
                  checked={this.state.showSaturday} />
                <label htmlFor='tab2'>Saturday<span>6</span></label>
            </li>
        </ul>
        {this.state.showFriday && 
          <div className="grid-wrapper-friday">
            <div className="schedule both-tracks">{`${day}Speaking Schedule`}</div>
            <div className="track">Bat of Doom</div>
            <div className="track">Terrified Chipmunk</div>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">0730</span>
                <span>Registration Open</span>
              </div>
            </a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">0850</span>
                <span>Opening Remarks</span>
              </div>
            </a>
            <a className="both-tracks" href="#keynotefri">
              <div className="box">
                <span className="talk-time">0900</span>
                <span>Keynote: Dave Kennedy</span>
              </div>
            </a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1000</span>
                <span>Break (15 min room switch)</span>
              </div>
            </a>
            <a href="#dslam"><div className="box">
              <span className="talk-time">1015</span>
              <span>DSLAM: Testing WAN Services on DSL Modems - Nicholas Starke</span>
            </div></a>
            <a href="#darkweb"><div className="box">
              <span className="talk-time">1015</span>
              <span>More Than Tor: Shining a Light on Different Corners of the Dark Web - Ben Brown</span>
            </div></a>
            <a href="#devsecops"><div className="box">
              <span className="talk-time">1115</span>
              <span>Automating Secure Development: Practical SecDevOps - Rob Temple</span>
            </div></a>
            <a href="#reports"><div className="box">
              <span className="talk-time">1115</span>
              <span>The Art and Science of Report Writing - Michael Born</span>
            </div></a>
            <a href="#2fa"><div className="box">
              <span className="talk-time">1135</span>
              <span>WTF, 2FA!? Y U No Protect Me? - Christine Seeman</span>
            </div></a>
            <a href="#unfluence"><div className="box">
              <span className="talk-time">1135</span>
              <span>Under the Unfluence: The Dark Side of Influence - Ron Woerner</span>
            </div></a>
            <a className="both-tracks"><div className="box">
              <span className="talk-time">1155</span>
              <span>Break for Lunch</span>
            </div></a>
            <a href="#chipsec"><div className="box">
              <span className="talk-time">1300</span>
              <span>Chip-level vulnerability assessment using CHIPSEC and LuvOS - Jeffrey Struik</span>
            </div></a>
            <a href="#selfcare"><div className="box">
              <span className="talk-time">1300</span>
              <span>Self Care in a 24/7 World - Justin Williams</span>
            </div></a>
            <a href="#iec"><div className="box">
              <span className="talk-time">1400</span>
              <span>Security of Industrial Control Systems: How IEC 62443 Can Help - Alex Nicoll</span>
            </div></a>
            <a href="#rtlsdr"><div className="box">
              <span className="talk-time">1400</span>
              <span>Basics of Radio Hacking with RTL-SDR - Gus Gorman</span>
            </div></a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1500</span>
                <span>Break</span>
              </div>
            </a>
            <a href="#python"><div className="box">
              <span className="talk-time">1520</span>
              <span>Python Obfuscation and Evasion Techniques - Nick Beede</span>
            </div></a>
            <a href="#edu"><div className="box">
              <span className="talk-time">1520</span>
              <span>Cybersecurity Education: Inside and Out - Owen Parkins & Jessica Rooney</span>
            </div></a>
            <a href="#ghidra"><div className="box">
              <span className="talk-time">1540</span>
              <span>What's a Ghidra, and why should you care? - Chris Eagle</span>
            </div></a>
            <a href="#pcapml"><div className="box">
              <span className="talk-time">1540</span>
              <span>PCAP Feature Engineering for Machine Learning - Heather Lawrence</span>
            </div></a>
            <a href="#bushwacking"><div className="box">
              <span className="talk-time">1600</span>
              <span>Bushwacking your way around a bootloader - .bx</span>
            </div></a>
            <a href="#ptvsrt"><div className="box">
              <span className="talk-time">1600</span>
              <span>Pen Testing VS Red Teaming and how to get more from your pen test reports - Sampson Chandler</span>
            </div></a>
            <a href="#research"><div className="box">
              <span className="talk-time">1700</span>
              <span>An Overview of hard research problems in Computer Security; Something of a Historical Perspective - Blaine Burnham</span>
            </div></a>
            <a href="#neuro"><div className="box">
              <span className="talk-time">1700</span>
              <span>Neurodiversity in the Workplace - Carla Raisler & George Walker</span>
            </div></a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1800</span>
                <span>Break for Dinner</span>
              </div>
            </a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1900</span>
                <span>Kernel Panic Party</span>
              </div>
            </a>
          </div>
        }

        {this.state.showSaturday &&
          <div className="grid-wrapper-saturday">
            <div className="schedule both-tracks">{`${day}Speaking Schedule`}</div>
            <div className="track">Bat of Doom</div>
            <div className="track">Terrified Chipmunk</div>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">0730</span>
                <span>Registration Open</span>
              </div>
            </a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">0850</span>
                <span>Opening Remarks</span>
              </div>
            </a>
            <a className="both-tracks" href="#keynotesat"><div className="box">
              <span className="talk-time">0900</span>
              <span>Keynote: Dan Tentler (Viss)</span>
            </div></a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1000</span>
                <span>Break (15 min room switch)</span>
              </div>
            </a>
            <a href="#mlfundamentals"><div className="box">
              <span className="talk-time">1015</span>
              <span>Building Security That Thinks - Machine Learning Fundamentals for Cybersecurity Professionals - Chris Morales</span>
            </div></a>
            <a href="#grapl"><div className="box">
              <span className="talk-time">1015</span>
              <span>Grapl - A Graph Analytics Platform for DFIR - Colin O'Brien</span>
            </div></a>
            <a href="#hassh"><div className="box">
              <span className="talk-time">1115</span>
              <span>HASSH It Real Good - Robert Danford</span>
            </div></a>
            <a href="#macos"><div className="box">
              <span className="talk-time">1115</span>
              <span>MacOS host monitoring - the open source way - Michael George</span>
            </div></a>
            <a href="#physical"><div className="box">
              <span className="talk-time">1135</span>
              <span>The Power of Physical Access - Ian Trent</span>
            </div></a>
            <a href="#bec"><div className="box">
              <span className="talk-time">1135</span>
              <span>Business Email Compromise (BEC) - The Effective Evolution of Nigerian Fraud Schemes - Jake Foiles</span>
            </div></a>
            <a className="both-tracks"><div className="box">
              <span className="talk-time">1155</span>
              <span>Break for Lunch</span>
            </div></a>
            <a href="#docker"><div className="box">
              <span className="talk-time">1300</span>
              <span>Detasseling Docker and Other Kernel Related Protections - Zach Giezen</span>
            </div></a>
            <a href="#ipv6"><div className="box">
              <span className="talk-time">1300</span>
              <span>IPv6 Security, or... How Not to Deploy IPv6 - Mark Ciecior</span>
            </div></a>
            <a href="#appsec"><div className="box">
              <span className="talk-time">1400</span>
              <span>Building an Application Security Program from Scratch - Doug Swartz</span>
            </div></a>
            <a href="#playbook"><div className="box">
              <span className="talk-time">1400</span>
              <span>Building Security Playbooks 101 - Lior Kolnik</span>
            </div></a>
            <a className="both-tracks">
              <div className="box">
                <span className="talk-time">1500</span>
                <span>Break</span>
              </div>
            </a>
            <a href="#mentor"><div className="box">
              <span className="talk-time">1400</span>
              <span>Stop talking about it? Mentoring the next generation - John Winger</span>
            </div></a>
            <a href="#soc"><div className="box">
              <span className="talk-time">1400</span>
              <span>SOC Transformation - From 3-Tier to Functional - Kevin Houle</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1420</span>
              <span>Own the Con - Kernelcon Crew</span>
            </div></a>
            <a href="#ctfnot"><div className="box">
              <span className="talk-time">1420</span>
              <span>Capture the Flag != Pentest (and other Hackworthy shenanigans) - Mark Bayley</span>
            </div></a>
            <a href="#creds"><div className="box">
              <span className="talk-time">1500</span>
              <span>Notes from Underground - Compromised Credentials - Brian Carter</span>
            </div></a>
            <a href="#badge"><div className="box">
              <span className="talk-time">1500</span>
              <span>Building the badge - How you can make small, cheap, and custom hardware for function or fashion - James Dietle</span>
            </div></a>
            <a href="#socialforensication"><div className="box">
              <span className="talk-time">1600</span>
              <span>Social Forensication: A Multidisciplinary Approach to Successful Social Engineering - Joe Gray</span>
            </div></a>
            <a href="#afl"><div className="box">
              <span className="talk-time">1600</span>
              <span>Fuzzing with AFL - Dhiraj Mishra</span>
            </div></a>
            <a><div className="box">
              <span className="talk-time">1700</span>
              <span>Closing Ceremony and Awards</span>
            </div></a>
          </div>
        }
        <span id="talks" className='talks'>
          <h1>Talks</h1>
          {talks}
        </span>
      </div>
    )
  }
}

export default Schedule;


