import React, { useState, Component } from "react";
// React Router import
import { Route, Switch, NavLink } from 'react-router-dom'
// Route view imports
import Who from "../views/Who"
import What from "../views/What"
import GraphicDesign from "../views/graphicDesign"
import Software from "../views/software"
import Photography from "../views/photography"
import How from "../views/How"

import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

// Custom Styles import
import '../css/navbar.css';

// Burger Menu
import { HamburgerSpin } from 'react-animated-burgers'

// React Page Transition
import { PageTransition } from '@steveeeie/react-page-transition';

// React Scroll Lock (To lock scrolling when navbar is active)
// 1. Import the functions
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class NavBar extends Component {

  // States for expanding/collapsing navbar menu
  constructor (props) {
    super(props)
    this.state = {
      // Burger Button
      isActive: false,
      // Collapse menu
      open: false,
      // Transition
      visibility: "hide"
    }
  }

  // Element that will maintain scroll ability when navbar is expanded
  targetScrollElement = null;

  // More body scroll settings to mount/unmount appropriately
  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    this.targetElement = document.querySelector('#main-navbar');
  }

  showTargetElement = () => {
    // ... some logic to show target element

    // 3. Disable body scroll
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {
    // ... some logic to hide target element

    // 4. Re-enable body scroll
    enableBodyScroll(this.targetElement);
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  // Function sets state to open/close, matching the burger animation with the appropriate state
  toggleButton = () => {
    // Burger Button
    this.setState({
      isActive: !this.state.isActive,
      open: !this.state.open,
    })
    // Lock page under menu & transition animation
    if (!this.state.open) {

      this.setState({visibility: "show"});
    }
    else {

      this.setState({visibility: "hide"});
    }
  }

  render() {
    return (
      <>
      <nav id="main-navbar" className="navbar sticky-top">
        <div className="container">
          <div className="navbar_container">
            <span className="left-nav">
              <h1 id="nav-brand">CLT</h1>
            </span>
            <span className="right-nav">
              <HamburgerSpin
                aria-controls="navbar-collapse"
                aria-expanded={this.state.open}
                toggleButton={this.toggleButton}
                isActive={this.state.isActive}
              />
            </span>
          </div>

          <div id="flyoutMenu" className={this.state.visibility}>
          <div className="container">
            <div className="py-2 navbar_container">
              <span className="left-nav">
                <h1 id="nav-brand">CLT</h1>
              </span>
              <span className="right-nav">
                <HamburgerSpin
                  aria-controls="navbar-collapse"
                  aria-expanded={this.state.open}
                  toggleButton={this.toggleButton}
                  isActive={this.state.isActive}
                />
              </span>
            </div>

            <div id="menu-container" className="py-2" >
              <div className="menu-items">
                <NavLink activeClassName="is-active" exact to='/' className="nav-outline-type Display-1 " onClick={this.toggleButton}>
                  <span id="who-link">Who</span>
                  <span id="who-link-expanded">Who I Am</span>
                </NavLink>
              </div>
              <div className="sub-menu-items">
                <NavLink activeClassName="is-active" id="gd-link" to='/GraphicDesign' className="nav-outline-type Display-1" onClick={this.toggleButton}>
                  <span>• Graphic Designer</span>
                </NavLink>
              </div>
              <div className="sub-menu-items">
                <NavLink activeClassName="is-active" id="sw-link" to='/Software' className="nav-outline-type" onClick={this.toggleButton}>
                  <span>• Software Developer</span>
                </NavLink>
              </div>
              <div className="sub-menu-items">
                <NavLink activeClassName='is-active' id="p-link" to='/Photography' className="nav-outline-type" onClick={this.toggleButton}>
                    <span>• Photographer</span>
                </NavLink>
              </div>
              <div className="menu-items">
                <NavLink activeClassName='is-active' id="how-link" to='/How' className="nav-outline-type Display-1" onClick={this.toggleButton}>
                  <span id="how-link">How</span>
                  <span id="how-link-expanded">How To Contact Me</span>
                </NavLink>
              </div>
            </div>

            <div>
              <div className="p-1">
                <a href="http://www.instagram.com/cesarsalaad" target="_blank">
                  <InstagramIcon width={40} />
                </a>
              </div>
              <div className="p-1">
                <a href="#" target="_blank">
                  <GithubIcon width={40} />
                </a>
              </div>
              <div className="p-1">
                <a href="#" target="_blank">
                  <LinkedinIcon width={40} />
                </a>
              </div>
            </div>
          </div>

          </div>
        </div>
      </nav>
          <Switch>
            <Route exact path="/" component={Who}/>
            <Route path="/GraphicDesign" component={GraphicDesign}/>
            <Route path="/Software" component={Software}/>
            <Route path="/Photography" component={Photography}/>
            <Route path="/How" component={How}/>
          </Switch>
      </>
    );
  }
}

export default NavBar;
