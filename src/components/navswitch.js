import React, { Component } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
// React Animation imports
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from '../timelines'
// Custom Styles import
import '../css/navswitch.css';


class NavSwitch extends Component {
  render() {
    /* Load routes from props and assign labels */
    const routes = this.props.nav_link_array;
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
      <React.Fragment>
      <nav className={this.props.className}>{ links }</nav>
      {/* Set route locations to corresponding views */}
      <Route render={({ location }) => {
        const { pathname, key } = location;

        return (
            <Switch location={location}>{switch_links}</Switch>
        )
      }}/>
      </React.Fragment>
    );
  }
}

export default NavSwitch
