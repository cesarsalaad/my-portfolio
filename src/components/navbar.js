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

import BurgerMenu from 'react-burger-menu';
import { HamburgerSpin } from 'react-animated-burgers'

import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Burger Button
      isActive: false,
      // Collapse menu
      open: false,
      setOpen: false
    }
  }

  toggleButton = () => {
    // Burger Button
    this.setState({
      isActive: !this.state.isActive,
      open: !this.state.open,
      setOpen: !this.state.setOpen
    })
  }

  render() {
    return (
      <>
      <nav id="main-navbar" className="navbar sticky-top">
        <div className="container">
          <Collapse in={this.state.open}>
            <div id="example-fade-text">
              <div className="py-5">
                    <NavLink to='/'>
                      <h1 className="nav-outline-type menu-items Display-1">
                        Who
                      </h1>
                    </NavLink>

                    <h1 className="nav-outline-type menu-items Display-1">
                      <a className="what">What</a>
                    </h1>

                    <NavLink to='/GraphicDesign'>
                      <h3 className="nav-outline-type sub-menu-items">
                        • Graphic Design
                      </h3>
                    </NavLink>
                    <NavLink to='/Software'>
                      <h3 className="nav-outline-type sub-menu-items">
                        • Software
                      </h3>
                    </NavLink>
                    <NavLink to='/Photography'>
                      <h3 className="nav-outline-type sub-menu-items">
                        • Photography
                      </h3>
                    </NavLink>

                    <NavLink to='/How'>
                      <h1 className="nav-outline-type menu-items Display-1">
                        How
                      </h1>
                    </NavLink>
              </div>
            </div>
          </Collapse>
          <div className="navbar_container">
            <span className="left-nav">
              <h1 className="">CLT</h1>
            </span>
            <span className="right-nav">
              <HamburgerSpin
                aria-controls="example-fade-text"
                aria-expanded={this.state.open}
                toggleButton={this.toggleButton}
                isActive={this.state.isActive}
              />
            </span>
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
