import React from 'react';
//My additions
import NavBar from "./components/navbar"
import SvgNavSwitch from "./components/svgnavswitch"
// React Router import
import { BrowserRouter } from 'react-router-dom'
// Route view imports
import GDathletics from "./views/GDathletics"
import GDshpe from "./views/GDshpe"
import GDmawo from "./views/GDmawo"



function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="container-sm">
          <div className="py-4">
            <h1 className="display-2 text-center">Footer Later</h1>
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
