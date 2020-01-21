import React, { Component } from "react";
// React Router import
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
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
    const routes = [
      { to: '/Who_am_I', label: 'Who', component: Who},
      { to: '/What_work_have_I_made', label: 'What', component: What},
      { to: '/How_can_we_get_in_touch', label: 'How', component: How}
    ];
    /* Load routes from props and assign labels */

    /* Load routes/labels to navigation links */
    const links = routes.map(({ to, label, icon }) => {
      return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
    );
    /* Load routes/components to router switch */
    const switch_links = routes.map(({ to, component }) => {
      return <Route strict exact path={to} component={component} key={to}/>
    }
    );
    return (
      <>
        <nav className="navbar navbar-expand-md sticky-top navbar-light nav-justified">
        <div className="container">
          <div className="navbar_container">
            <span className="left-nav">
                <h1 className>CLT</h1>
            </span>
            <span>
              <nav className={"standard_nav"}>{ links }</nav>
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
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
              <Switch location={location}>{switch_links}</Switch>
          )
        }}/>
        </>
    );
  }
}

export default NavBar;
