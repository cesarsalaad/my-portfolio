import React, { Component } from 'react';
// Each gallery module is separated for organization
import BroncosPosters from "./gallery_components/broncosPosters"


class PrintGallery extends Component {
  render() {
    return (
      <div id="content">
        <h1 className="py-1">Broncos Posters</h1>
        <h2></h2>
          <BroncosPosters/>

      </div>
    );
  }
}

export default PrintGallery
