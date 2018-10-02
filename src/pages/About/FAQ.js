import React, { Component } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import faqConfig from 'faqConfig';
import './About.scss';

require('rc-collapse/assets/index.css');

class FAQ extends Component {
  static displayName = 'FAQ';

  constructor(props) {
    super(props);
    this.state = {
      accordion: false,
      activeKey: ['0'],
    };
  }

  static propTypes = {};
  static defaultProps = {};

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  render() {
    const accordion = this.state.accordion;
    const activeKey = this.state.activeKey;

    const faq = faqConfig.map((ele, idx) => {
      const question = (
        <div className='faq-question'>
          <span className='faq-q'>Q</span>
          <span className='question'>{ele.question}</span>
        </div>
      );

      const answer = (
        <div className='faq-answer'>
          <span className='faq-a'>A</span>
          <span className='answer' dangerouslySetInnerHTML={{ __html: ele.answer }} />
        </div>
      );

      return (
        <Collapse className='faq-single'
          onChange={this.onChange}
          accordion={accordion}
          activeKey={activeKey}
          key={idx}>
          <Panel header={question}
            key={idx}>
            {answer}
          </Panel>
        </Collapse>
      );
    }); 


    return (
      <div className='faq-list'>
        {faq}
      </div>
    );
  }
}

export default FAQ;
