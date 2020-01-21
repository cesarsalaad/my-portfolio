import React, { Component } from 'react';
// Each gallery module is separated for organization
import BroncosPosters from "./gallery_components/broncosPosters"

class BrandingDetail extends Component {
  render() {
    return (
      <div id="content">
        <h1 className="py-1">Branding</h1>
        <BroncosPosters/>
      </div>
    );
  }
}

export default BrandingDetail
