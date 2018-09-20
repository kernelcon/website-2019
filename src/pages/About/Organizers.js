import React, { Component } from 'react';

import ocConfig from 'ocConfig';
import './About.scss';


class Organizers extends Component {
  static displayName = 'Organizers';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  getImage(ele) {
    const imageName =  ele.image ? ele.image : 'kernel.png';
    const imgUrl = require(`../../static/images/${imageName}`);

    return imgUrl;
  }

  render() {
    const sortedOc = ocConfig.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });
    
    const oc = sortedOc.map((ele, idx) => {
      const imgUrl = this.getImage(ele);

      return (
        <div className='oc-member'
          key={ele.name}>
          <div className='oc-member-box'>
            <div className='oc-member-img'>
              <img src={imgUrl} height="50" alt={ele.name}/>
            </div>
            <div className='oc-text-section'>
              <div className='oc-name'>{ele.name}</div>
              <div className='oc-title'>{ele.title}</div>
              {ele.twitter && <a className='oc-twitter' rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${ele.twitter}`}>{ele.twitter}</a>}
            </div>
          </div>
        </div>
      );
    }); 


    return (
      <div className='organizers'>
        <div className='tab-title'>
          Organizing Committee
        </div>
        <div className='oc-list'>
          {oc}
        </div>
      </div>
    );
  }
}

export default Organizers;
