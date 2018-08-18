import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    class: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    class: '',
    onClick: function onClick() {}
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <a onClick={this.handleClick}
        href={this.props.href}
        className={`btn btn-sm animated-button victoria-four ${this.props.class}`}>
        {this.props.title}
      </a>
    );
  }

  handleClick(evt) {
    this.props.onClick(evt);
  }
}

export default Button;

