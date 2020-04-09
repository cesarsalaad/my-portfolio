import React, {Component} from 'react';
//My additions
import NavBar from "./components/navbar"
// React Router import
import { BrowserRouter } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar></NavBar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
