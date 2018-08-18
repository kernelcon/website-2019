import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IFrame extends Component {
  static displayName = 'IFrame';

  static propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func
  };

  // this component is currently fucked

  static defaultProps = {};

  componentDidUpdate() {
    if(this.fr) {
      console.log(this);
    }
    //this.frame.addEventListener('load', this.props.onLoad);
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <iframe ref={(el) => this.fr = el} {...this.props}/>
    );
  }
}

export default IFrame;

