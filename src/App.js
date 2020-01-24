import React from 'react';
//My additions
import NavBar from "./components/navbar"
// React Router import
import { BrowserRouter } from 'react-router-dom'



function App() {


  return (
    <BrowserRouter basename=".">
      <div className="App">
        <NavBar></NavBar>
        <div className="container-sm">
          <div className="py-4">
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
