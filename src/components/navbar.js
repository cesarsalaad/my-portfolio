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
            <div id="navbar-collapse">
              <div className="py-5" >

                  <div className="menu-items">
                    <NavLink activeClassName="is-active" exact to='/' className="nav-outline-type Display-1">
                        <span id="who-link">Who</span>
                        <span id="who-link-expanded">Who I Am</span>
                    </NavLink>
                  </div>
                  <div className="sub-menu-items">
                    <NavLink activeClassName="is-active" id="gd-link" to='/GraphicDesign' className="nav-outline-type Display-1">
                        <span>• Graphic Designer</span>
                    </NavLink>
                  </div>
                  <div className="sub-menu-items">
                    <NavLink activeClassName="is-active" id="sw-link" to='/Software' className="nav-outline-type">
                        <span>• Software Developer</span>
                    </NavLink>
                  </div>
                  <div className="sub-menu-items">
                    <NavLink activeClassName='is-active' id="p-link" to='/Photography' className="nav-outline-type">
                        <span>• Photographer</span>
                    </NavLink>
                  </div>
                  <div className="menu-items">
                    <NavLink activeClassName='is-active' id="how-link" to='/How' className="nav-outline-type Display-1">
                        <span>Contact</span>
                    </NavLink>
                  </div>

              </div>
            </div>
          </Collapse>
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
