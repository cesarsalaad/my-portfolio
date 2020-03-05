import React, { Component } from 'react';
// My additions
import NavSwitch from "../components/navswitch"
// Route view imports
import PrintGallery from "../components/graphicDesign/SCU_Athletics/printGallery"
import DigitalGallery from "../components/graphicDesign/SCU_Athletics/digitalGallery"
import BrandingDetail from "../components/graphicDesign/SCU_Athletics/brandingDetail"
import MotionGraphicsGallery from "../components/graphicDesign/SCU_Athletics/motionGraphicsGallery"

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



// Lottie
import * as lottie from 'lottie-web/build/player/lottie.js'
import animationData from '../lotties/trading_card.json'

class GDathletics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Transform
      transform: 'none'
    }
  }

  anim;
  elem;
  elem_wrapper;
  nav_offset;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.elem = document.getElementById('bodymovin')
    this.elem_wrapper = document.getElementById('lottie-baseball-wrapper')
    this.nav_offset = document.getElementById('main-navbar')

    this.anim = lottie.loadAnimation({
        container: this.elem,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice',
        },
        animationData: animationData
    });
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    // event.srcElement.body.scrollTop (for whole page)
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      this.setState({
        transform: itemTranslate
      });


      // calculate the percentage the user has scrolled down the page

      // Bottom of wrapper - Height of Nav - Height of Wrapper
      var wrapperStart =  this.elem_wrapper.offsetTop

      var wrapperEnd = this.elem_wrapper.offsetHeight + this.elem_wrapper.offsetTop

      // window.pageYOffset = A floating-point number specifying the number of pixels the Document is scrolled vertically within its containing Window. This number is subpixel precise, so it may not be an integer. A value of 0.0 indicates that the window is not scrolled vertically, and that the top of the document is located at the top edge of the window's content area.

      // Pixels scrolled - Top of wrapper = Starting point for the animation
      var numPixelsScrolledInRegion = parseFloat(window.pageYOffset)-wrapperStart;

      var scrollPercent = (100 * numPixelsScrolledInRegion)/(wrapperEnd-wrapperStart);

      var scrollPercentRounded = Math.round(scrollPercent);

      // Using pixel position from numPixelsScrolledInRegion to directly determine current frame
      var scrollToParam = ((scrollPercentRounded / 100) * (this.anim.totalFrames));

      // Ugly print statements for testing purposes :)
      var numPixelsScrolled = window.pageYOffset;

      console.log("\nnumPixelsScrolled: ", numPixelsScrolled);
      console.log("numPixelsScrolledInRegion: ", numPixelsScrolledInRegion);
      console.log("Document Offset: " ,window.document.body.offsetHeight);
      console.log("Wrapper Top: ", parseFloat(wrapperStart));
      console.log("Wrapper Bottom: ", parseFloat(wrapperEnd));
      console.log("Scroll % Rounded: " , scrollPercentRounded);
      console.log("Frame rate: ", (this.anim.frameRate));
      console.log("Total Frames: ", (this.anim.totalFrames));

      if((numPixelsScrolledInRegion<600)){
        this.anim.goToAndStop(numPixelsScrolledInRegion-1, true)
      }
  };

  render() {
    return (
      <>
        <body>
        <h1 className="display-3 text-center">Santa Clara University Athletics</h1>
        <h3 className="text-center">These are some of my favorite projects over the years.</h3>

          <div id="lottie-baseball-wrapper">
            <div id="bodymovin"></div>
          </div>

          <div className="container-sm">
            <section>
              <h1 className="display-3">
                Trading Cards
              </h1>

              <div className="py-5">
                <h3>
                  Project Details:
                </h3>
                <p className="lead">
                  Started off as a cool giveaway to commemorate seniors in a timeless manner. I continued to make these for other sports.
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
