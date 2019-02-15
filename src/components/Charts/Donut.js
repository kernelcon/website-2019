import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Donut.scss';

class Donut extends Component {
  static displayName = 'Donut';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    value: PropTypes.number,
    valueLabel: PropTypes.string,
    size: PropTypes.number,
    stroke: PropTypes.number,
    showText: PropTypes.bool,
    color: PropTypes.string
  };
  static defaultProps = {
    value: 0,
    valueLabel: 'Technical',
    size: 25,
    stroke: 5,
    showText: false,
    color: '#ad974f'
  };

  render() {
    const halfsize = (this.props.size * 0.5);
    const radius = halfsize - (this.props.stroke * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((this.props.value * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: this.props.stroke};
    const indicatorstyle = {strokeWidth: this.props.stroke, strokeDasharray: dashval}
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
      <svg width={this.props.size} height={this.props.size} className="donutchart">
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
        {this.props.showText && <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val">{this.props.value}</tspan>
          <tspan className="donutchart-text-percent">%</tspan>
          <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{this.props.valuelabel}</tspan>
        </text>}
      </svg>
    );
  }
}

export default Donut;
