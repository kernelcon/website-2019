import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Individuals extends Component {
  static displayName = 'Individuals';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    speaker: PropTypes.string,
    company: PropTypes.string,
    twitter: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string
  };

  static defaultProps = {
    speaker: '',
    company: '',
    twitter: '',
    image: '',
    bio: ''
  };

  getImage(img) {
    const imgSrc =  img ? require(`../../static/images/${img}`) : 'https://via.placeholder.com/150';
    return imgSrc;
  }

  render() {
    const imgSrc = this.getImage(this.props.image);

    return (
      <div className='individual-speaker-section'>
        <div className='speaker-wording'>
          <span>
          <h3>{this.props.speaker}</h3>
          {(this.props.company || this.props.twitter) && <span className='speaker-titles'>
            {this.props.company && <span>{this.props.company}</span>}
            {this.props.twitter && <span>{this.props.twitter}</span>}
          </span>}
          <img src={imgSrc}
            alt={this.props.speaker}
            className='bio-image'
          />
          <p>{this.props.bio}</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Individuals;


