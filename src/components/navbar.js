import React, { Component } from "react";
// React Router import
import { Route, Switch, NavLink } from 'react-router-dom'
// Route view imports
import Who from "../views/Who"
import What from "../views/What"
import How from "../views/How"

import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

// Custom Styles import
import '../css/navbar.css';

import BurgerMenu from 'react-burger-menu';
import { HamburgerSpin } from 'react-animated-burgers'

class MenuWrap extends Component {

  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Burger Menu
      menuOpen: false,
      // Burger Button
      isActive: false
    }
  }

  toggleButton = () => {
    // Burger Button
    this.setState({
      isActive: !this.state.isActive
    })
    // Burger Menu
    this.toggleMenu()
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
    this.setState({isActive: state.isOpen})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render() {
    const Menu = BurgerMenu['stack'];
    return (
      <>
      <div id="outer-container">
      <nav className="navbar sticky-top">
        <div className="container">
          <div className="navbar_container">
            <span className="left-nav">
              <h1 className="display-2 navbar-brand">CLT</h1>
            </span>
            <span className="right-nav">
              <HamburgerSpin
                toggleButton={this.toggleButton}
                isActive={this.state.isActive}
              />
            </span>
          </div>
        </div>
      </nav>
      <MenuWrap wait={20}>
        <Menu
          right
          id='stack'
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
          customBurgerIcon={ false }
          customCrossIcon={ false }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <a key="0" href=""><i className="fas fa-camera" />
            <NavLink to='/'>Who</NavLink>
          </a>
          <a key="1" href=""><i className="fa fa-fw fa-bell-o" />
            <NavLink to='/What'>What</NavLink>
          </a>
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o" />
            <NavLink to='/How'>How</NavLink>
          </a>
        </Menu>
      </MenuWrap>

        <main id="page-wrap">
          <switch>
            <Route exact path="/" component={Who}/>
            <Route path="/What" component={What}/>
            <Route path="/How" component={How}/>
          </switch>
        </main>
      </div>
      </>
    );
  }
}

export default NavBar;
