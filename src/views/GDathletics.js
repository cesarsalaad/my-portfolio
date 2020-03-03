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

      // element.offsetBottom = element.offsetTop + element.offsetHeight
      // Bottom of page position in px
      var offsetBottom = this.elem_wrapper.offsetTop + this.elem_wrapper.offsetHeight - this.nav_offset.offsetHeight

      // window.pageYOffset = A floating-point number specifying the number of pixels the Document is scrolled vertically within its containing Window. This number is subpixel precise, so it may not be an integer. A value of 0.0 indicates that the window is not scrolled vertically, and that the top of the document is located at the top edge of the window's content area.
      var numPixelsScrolled = window.pageYOffset;

      // is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.
      var offsetHeight = window.document.body.offsetHeight- this.nav_offset.offsetHeight;

      // returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin
      var clientHeight = document.documentElement.clientHeight;

      var scrollPercent = 100 * numPixelsScrolled / (offsetBottom-clientHeight);

      var scrollPercentRounded = Math.round(scrollPercent);

      var scrollToParam = ( (scrollPercentRounded / 100) * (this.anim.totalFrames));

      console.log("\nnumPixelsScrolled: ", numPixelsScrolled);
      console.log("Document Offset: " ,window.document.body.offsetHeight);
      console.log("Offset Bottom: ", parseFloat(offsetBottom));
      console.log("Scroll % Rounded: " , scrollPercentRounded);
      console.log("Frame rate: ", (this.anim.frameRate));
      console.log("Total Frames: ", (this.anim.totalFrames));
      console.log("Current Frame: ", (scrollToParam));

      if(scrollToParam<600){
        this.anim.goToAndStop(scrollToParam-1, true)
      }
  };

  render() {
    return (
      <>
        <body>
        <h1 className="display-2 text-center">Software</h1>
        <h3 className="text-center">These are some of my favorite projects over the years.</h3>

          <div id="lottie-baseball-wrapper">
            <div id="bodymovin"></div>
          </div>

          <div className="container-sm">
            <section>
              <h1 className="display-3">
                Notes Organizer for the Visually Impaired
              </h1>

              <div className="py-5">
                <h3>
                  Project Details:
                </h3>
                <p className="lead">
                  <b>Duration:</b> 1 year <br/>
                  <b>Roles:</b> UI Designer, iOS Developer <br/>
                  <b>Tools Used:</b> XCode, Git, Adobe XD, Adobe Illustrator <br/>
                  <b>Tested on:</b> iPhone 8 Plus & iPhone X <br/>
                  <b>Teammates:</b> Axel Perez <br/>
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
