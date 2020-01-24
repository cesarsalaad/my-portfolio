import React, { Component } from 'react';
// My additions
import NavSwitch from "../components/navswitch"
// React Router import
import { BrowserRouter } from 'react-router-dom'
// Route view imports
import PrintGallery from "../components/graphicDesign/SCU_Athletics/printGallery"
import DigitalGallery from "../components/graphicDesign/SCU_Athletics/digitalGallery"
import BrandingDetail from "../components/graphicDesign/SCU_Athletics/brandingDetail"
import MotionGraphicsGallery from "../components/graphicDesign/SCU_Athletics/motionGraphicsGallery"

const GDathletics = ({ match }) => {
    const athleticsGraphicDesignNav = [
      { to: `${match.url}/SC_Print`, label: 'Print', component: PrintGallery },
      { to: `${match.url}/SC_Digital`, label: 'Digital', component: DigitalGallery },
      { to: `${match.url}/SC_Branding`, label: 'Branding', component: BrandingDetail },
      { to: `${match.url}/SC_MotionGraphics`, label: 'Motion Graphics', component: MotionGraphicsGallery }
    ];
    return (
      <BrowserRouter>
        <div className="view">
          <NavSwitch nav_link_array={athleticsGraphicDesignNav} className="standard_nav"/>
        </div>
      </BrowserRouter>
    );
  }

export default GDathletics
