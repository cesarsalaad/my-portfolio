import React from 'react';
import ReactDOM from 'react-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './css/burgermenu.css';

import './fonts/source-sans-pro-release/source-sans-pro.css';
import './fonts/source-sans-pro-release/source-sans-variable.css';

import './fonts/Lato/latofonts.css';
import './fonts/Lato/latostyle.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
