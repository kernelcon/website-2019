import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResponsiveNavBar.scss';

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

class ResponsiveNavBar extends Component {
  static displayName = 'ResponsiveNavBar';

  static propTypes = {
    menu: PropTypes.node.isRequired,
    navBarMenuClassName: PropTypes.string,
    hamburgerMenuClassName: PropTypes.string,
    changeMenuOn: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    menuOpenButton: PropTypes.node.isRequired,
    menuCloseButton: PropTypes.node.isRequired
  };

  static defaultProps = {
    navBarMenuClassName: '',
    hamburgerMenuClassName: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      showMenuIcons: false,
      openMenu: false
    };
  }

  updateDimensions = () => {
    const w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth;


    this.setState({
      showMenuIcons: width > this.props.changeMenuOn ? false : true
    });
      
    console.log('this.state.showMenuIcons', this.state.showMenuIcons);
    console.log('this.state.openMenu', this.state.openMenu);
  }

  handleClick = () => {
    // this.setState({
    //   openMenu: !this.state.openMenu
    // });
  };

  componentWillMount = () => {
    this.updateDimensions();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions());
  }
  componentWillUnmount = () => {
    window.removeEventListerner("resize", this.updateDimensions());
  }

  render() {
    const {menu, navBarMenuClassName, hamburgerMenuClassName, changeMenuOn, menuOpenButton, menuCloseButton} = this.props;

    console.log('this.state.showMenuIcons', this.state.showMenuIcons);
    console.log('this.state.openMenu', this.state.openMenu);

    return (
      <div>
        {!this.state.showMenuIcons && <div>LargeMenu</div>}

        {this.state.showMenuIcons ? (
          !this.state.openMenu ? (
            <MenuIcon onClick={this.handleClick()} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick()} icon={menuCloseButton} />
          )
        ) : (
          null
        )}

        {this.state.showMenuIcons && this.state.openMenu ? <div>SmallMenu</div> : null}

      </div>
    )
  }
}

export default ResponsiveNavBar;














