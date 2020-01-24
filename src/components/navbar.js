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

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md sticky-top navbar-light nav-justified">
        <div className="container">
          <div className="navbar_container">
            <span className="left-nav">
                <h1 className>CLT</h1>
            </span>
            <span>
              <nav className={"standard_nav"}>
                <NavLink to='/'>Who</NavLink>
                <NavLink to='/What'>What</NavLink>
                <NavLink to='/How'>How</NavLink>
              </nav>
            </span>
            <span className="right-nav">
            <div className="d-flex social-row">
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
            </span>


          </div>
          </div>
        </nav>
          <switch>
            <Route exact path="/" component={Who}/>
            <Route path="/What" component={What}/>
            <Route path="/How" component={How}/>
          </switch>
        </>
    );
  }
}

export default NavBar;
