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
  state = {
  collapse1: false,
  collapseID: ''
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }
  render() {
    return (
      <>


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
