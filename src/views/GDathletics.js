import React, { Component } from 'react';
// My additions
import NavSwitch from "../components/navswitch"
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
        <div className="view">
          <NavSwitch nav_link_array={athleticsGraphicDesignNav} className="standard_nav"/>
        </div>
    );
  }

export default GDathletics
