import React, { Component } from 'react';
import bioConfig from 'bioConfig';
import './Con.scss';
import man from '../../static/images/man-silhoutte.png';

class Bio extends Component {
  static displayName = 'Bio';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};


  render() {
    const id = this.props.location.search ? parseInt(this.props.location.search.split('?id=')[1], 10) : 0;
    console.log('id', id);

    const person = bioConfig.filter((ele) => {
      return ele.id === id;
    })[0];

    console.log('person', person);

    return (
      <div id='main_hero' className=''>
        <div className='container'>
          <div className='venue-section bio'>
            <div className='bio-image-area'>
              <img src={man}
                alt='bio'
                height="200" />
            </div>
            <div className='bio-text-area'>
              <h1 className='bio-name'>{person.name}</h1>
              <h3 className='bio-title'>{person.title}</h3>
              <p className='bio-text'>{person.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;



