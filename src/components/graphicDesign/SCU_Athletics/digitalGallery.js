import React, { Component } from 'react';
// Each gallery module is separated for organization
import BroncosPosters from "./gallery_components/broncosPosters"

class DigitalGallery extends Component {
  render() {
    return (
      <div id="content">
        <h1 className="py-1">Digital</h1>
        <BroncosPosters/>
      </div>
    );
  }
}

export default DigitalGallery
