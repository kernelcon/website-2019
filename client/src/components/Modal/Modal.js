import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.string,
    modalContentStyle: PropTypes.node,
    height: PropTypes.string,
    width: PropTypes.string
  };

  static defaultProps = {
    modalContentStyle: {
      padding: '20px'
    }
  };

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className='backdrop'>
        <div className='modal-container'>
          <div className='modal-header'>
            <div className='modal-title'>
              {this.props.title}
            </div>
            <div className='modal-close'>
              <a onClick={this.props.onClose}>X</a>
            </div>
          </div>
          <div className='modal-content' style={this.props.modalContentStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

