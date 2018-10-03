import React, { Component } from 'react';
import marked from 'marked';

import './Emails.scss';

class Emails extends Component {
  static displayName = 'Emails';

  constructor(props) {
    super(props);
    this.state = {
      emailID: 0,
      emailBody: ''
    };
  }

  static propTypes = {};
  static defaultProps = {};

  componentWillMount() {
    const emailID = this.props.location.pathname.length > 7 ? this.props.location.pathname.split('/email/')[1] : '0';
    this.setState({
      emailID: emailID
    });
  }

  getEmailErrorText() {
    return (
      '# Email Id Error\n\nAnd this is a paragraph'
    )
  }

  getEmailById(id) {
    const emailPath = require(`./emails/${id}/index.md`);
    console.log('emailPath', emailPath);

    fetch(emailPath).then((response) => response.text()).then((text) => {
      this.setState({
        emailBody: marked(text)
      })
    });
    return (this.state.emailBody)
  }

  render() {
    if (this.state.emailID === '0') {
      this.getEmailErrorText()
    } else {
      this.getEmailById(this.state.emailID);
    } 

    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section'>
            <div className='email-section'>
              <div dangerouslySetInnerHTML={{__html: this.state.emailBody}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Emails;
