import React from 'react';
//My additions
import NavBar from "./components/navbar"
// React Router import
import { HashRouter } from 'react-router-dom'



function App() {


  return (
    <HashRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="container-sm">
          <div className="py-4">
          </div>
        </div>
      </div>
    </HashRouter>

  );
}

export default App;
