import React from 'react';
//My additions
import SvgNavSwitch from "../components/svgnavswitch"
// React Router import
import { BrowserRouter } from 'react-router-dom'
// Route view imports
import GDathletics from "./GDathletics"
import GDshpe from "./GDshpe"
import GDmawo from "./GDmawo"



function What() {
  const graphicDesignNav = [
    { to: '/SCU_Athletics', label: 'SCU Athletics', component: GDathletics, icon: "SCUAthleticsIcon" },
    { to: '/SHPE_SCU', label: 'SHPE SCU', component: GDshpe, icon: "SHPEIcon" },
    { to: '/MAWO_GO_STREAM_HIS_GREAT_MUSIC_PLS', label: 'MAWO', component: GDmawo, icon: "MawoIcon" }
  ]

  return (
    <BrowserRouter>
        <div className="container-sm">
          <div className="py-4">
            <h1 className="display-2 text-center">Graphic Design</h1>
            <h3 className="text-center">I'm mostly self-taught, using online videos and articles to fill in the gaps.</h3>
            <h6 className="text-center">Shoutout to all the places below for fostering my creative development! :)</h6>
          </div>
          <SvgNavSwitch nav_link_array={graphicDesignNav} className="logo_nav"/>
        </div>
    </BrowserRouter>

  );
}

export default What;
