import React, { Component } from "react";
import { Route, Switch, NavLink } from 'react-router-dom';
// React Animation imports
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from '../timelines'
// Custom Styles import
import '../css/navswitch.css';
// Icon imports
import SVGIcon from "./icons/SVGIcon"


class SvgNavSwitch extends Component {
  render() {
    /* Load routes from props and assign labels */
    const routes = this.props.nav_link_array;
    /* Load routes/labels to navigation links */
    const links = routes.map(({ to, label, icon }) => {
      return <NavLink to={to} key={to} className="btn btn-outline-dark"><SVGIcon name={icon}/></NavLink>}
    );
    /* Load routes/components to router switch */
    const switch_links = routes.map(({ to, component }) => {
      return <Route path={to} component={component} key={to}/>
    }
    );

    return (
      <React.Fragment>
      <div className="container-md">
      <nav className={this.props.className}>{ links }</nav>
      </div>
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

export default SvgNavSwitch
