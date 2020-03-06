import React, { Component } from 'react';
// My additions
import NavSwitch from "../components/navswitch"
// Route view imports
import PrintGallery from "../components/graphicDesign/SCU_Athletics/printGallery"
import DigitalGallery from "../components/graphicDesign/SCU_Athletics/digitalGallery"
import BrandingDetail from "../components/graphicDesign/SCU_Athletics/brandingDetail"
import MotionGraphicsGallery from "../components/graphicDesign/SCU_Athletics/motionGraphicsGallery"
import LottieSection from "../components/lottieSection"

// const GDathletics = ({ match }) => {
//     const athleticsGraphicDesignNav = [
//       { to: `${match.url}/SC_Print`, label: 'Print', component: PrintGallery },
//       { to: `${match.url}/SC_Digital`, label: 'Digital', component: DigitalGallery },
//       { to: `${match.url}/SC_Branding`, label: 'Branding', component: BrandingDetail },
//       { to: `${match.url}/SC_MotionGraphics`, label: 'Motion Graphics', component: MotionGraphicsGallery }
//     ];
//     return (
//         <div className="view">
//           <NavSwitch nav_link_array={athleticsGraphicDesignNav} className="standard_nav"/>
//         </div>
//     );
//   }

import TradingCardData from '../lotties/trading_card.json'
import BasketballProgramData from '../lotties/basketball_program.json'

class GDathletics extends Component {

  render() {
    return (
      <>
        <body>
        <h1 className="display-3 text-center">Santa Clara University Athletics</h1>
        <h3 className="text-center">These are some of my favorite projects over the years.</h3>

          <LottieSection lottieName="trading_card" lottieWrapperName="trading_card_wrapper" jsonFile={TradingCardData}/>
          <div className="container-sm">
            <section>
              <h1 className="display-3">
                Trading Cards
              </h1>

              <div className="py-2">
                <h3>
                  Project Details:
                </h3>
                <p className="lead">
                  Started off as a cool giveaway to commemorate seniors in a timeless manner. I continued to make these for other sports.
                </p>
              </div>
            </section>
          </div>

          <LottieSection lottieName="basketball_program" lottieWrapperName="basketball_program_wrapper" jsonFile={BasketballProgramData}/>
          <div className="container-sm">
            <section>
              <h1 className="display-3">
                Gameday Programs
              </h1>

              <div className="py-2">
                <h3>
                  Project Details:
                </h3>
                <p className="lead">
                  Function first, with a dual purpose form. The outside cover doubles as a poster of select Bronco Basketball players.
                </p>
              </div>
            </section>
          </div>

        </body>
      </>
    );
  }
}

export default GDathletics
