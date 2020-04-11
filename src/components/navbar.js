import React, { useState, useEffect, useRef } from "react";
// React Router import
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
// Route view imports
import Who from "../views/Who";
import What from "../views/What";
import GraphicDesign from "../views/graphicDesign";
import Software from "../views/software";
import Photography from "../views/photography";
import How from "../views/How";

import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

// Custom Styles import
import '../css/navbar.css';

// Reveal Text Animation
import Slide from 'react-reveal/Slide';

// Burger Menu
import { HamburgerSpin } from 'react-animated-burgers';

// React Scroll Lock (To lock scrolling when navbar is active)
// 1. Import the functions
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function NavBar() {
	// Burger Menu State
	const [burger, setBurger] = useState(false);
	// Menu Open State
	const [menuOpen, setMenuOpen] = useState(false);
	// Current location provided by React Router Hook :)
	let location = useLocation();

	// 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
	// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
	// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
	// 2. Initialise your ref and targetElement here
	let targetRef = useRef(null);

	// More body scroll settings to mount/unmount appropriately
	useEffect(() => {    
		// Lock page under menu & transition animation, release when menu is closed
		menuOpen ? disableBodyScroll(targetRef.current) : enableBodyScroll(targetRef.current);
  
		return function cleanUp() {
			// 5. Useful if we have called disableBodyScroll for multiple target elements,
			// and we just want a kill-switch to undo all that.
			// OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
			// clicks a link which takes him/her to a different page within the app.
			clearAllBodyScrollLocks();
		};
	}, [menuOpen, location]);

	// Function sets state to open/close, matching the burger animation with the appropriate state
	const toggleButton = () => {
		// Burger Button
		setBurger(!burger);
		setMenuOpen(!menuOpen);
		
	};

	return (
		<>
			<nav id="main-navbar" className="navbar sticky-top">
				<div className="navbar_container container">
					<span className="left-nav">
						<h1 id="nav-brand">CLT: {location.pathname}</h1>
					</span>
					<span className="right-nav">
						<HamburgerSpin
							aria-controls="navbar-collapse"
							aria-expanded={menuOpen}
							toggleButton={toggleButton}
							isActive={burger}
						/>
					</span>
				</div>
			</nav>


			<div id="flyoutMenu" className={menuOpen ? "show" : "hide"}>
				{/*
				// 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
				// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
				// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
				*/}
				<div ref={targetRef} id="menu-container" className="d-flex align-items-center flex-wrap container">

					<div className="flex-grow-1 py-2" >
						<Slide left cascade when={menuOpen}>
							<ul>
								<li>
									<NavLink activeClassName="is-active" exact to='/' className="menu-items nav-outline-type Display-1 " onClick={toggleButton}>
										<span id="who-link">Who</span>
										<span id="who-link-expanded">Who I Am</span>
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName="is-active" to='/GraphicDesign' className="sub-menu-items nav-outline-type Display-1" onClick={toggleButton}>
										<span>• Graphic Designer</span>
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName="is-active" to='/Software' className="sub-menu-items nav-outline-type" onClick={toggleButton}>
										<span>• Software Developer</span>
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName='is-active' to='/Photography' className="sub-menu-items nav-outline-type" onClick={toggleButton}>
										<span>• Photographer</span>
									</NavLink>
								</li>
								<li>
									<NavLink activeClassName='is-active' to='/How' className="sub-menu-items nav-outline-type Display-1" onClick={toggleButton}>
										<span id="how-link">How</span>
										<span id="how-link-expanded">How To Contact Me</span>
									</NavLink>
								</li>
							</ul>
						</Slide>
					</div>

					<Slide right cascade when={menuOpen}>
						<div>
							<div className="p-1">
								<a href="http://www.instagram.com/cesarsalaad">
									<InstagramIcon width={40} />
								</a>
							</div>
							<div className="p-1">
								<a href="https://github.com/clutesen">
									<GithubIcon width={40} />
								</a>
							</div>
							<div className="p-1">
								<a href="https://www.linkedin.com/in/cesar-tesen-797078bb/">
									<LinkedinIcon width={40} />
								</a>
							</div>
						</div>
					</Slide>

				</div>
			</div>


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

export default NavBar;
