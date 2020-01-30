import React, { Component } from "react";
// React Router import
import { Route, Switch, NavLink } from 'react-router-dom'
// Route view imports
import Who from "../views/Who"
import What from "../views/What"
import GraphicDesign from "../views/graphicDesign"
import Software from "../views/software"
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
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

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
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <NavLink to='/'>Who</NavLink>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <a className="what">What</a>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <NavLink className="dropdown-item" to='/GraphicDesign'>
                    <i className="fas fa-pencil-ruler"></i>
                    Graphic Design
                  </NavLink>
                  <NavLink className="dropdown-item" to='/Software'>
                    <i class="far fa-file-code"></i>
                     Software
                  </NavLink>
                </Card.Body>

              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  <NavLink to='/How'>How</NavLink>
                </Accordion.Toggle>
              </Card.Header>
            </Card>
          </Accordion>

        </Menu>
      </MenuWrap>

        <main id="page-wrap">
          <switch>
            <Route exact path="/" component={Who}/>
            <Route path="/GraphicDesign" component={GraphicDesign}/>
            <Route path="/Software" component={Software}/>
            <Route path="/How" component={How}/>
          </switch>
        </main>
      </div>
      </>
    );
  }
}

export default NavBar;
