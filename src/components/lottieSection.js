import React, { Component } from 'react';
// Lottie
import * as lottie from 'lottie-web/build/player/lottie.js'

class LottieSection extends Component {
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

    this.elem = document.getElementById(this.props.lottieName)
    this.elem_wrapper = document.getElementById(this.props.lottieWrapperName)
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
        animationData: this.props.jsonFile
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

      var wrapperEnd =  wrapperStart + this.elem_wrapper.offsetHeight - (window.innerHeight)

      // window.pageYOffset = A floating-point number specifying the number of pixels the Document is scrolled vertically within its containing Window. This number is subpixel precise, so it may not be an integer. A value of 0.0 indicates that the window is not scrolled vertically, and that the top of the document is located at the top edge of the window's content area.

      // Pixels scrolled - Top of wrapper = Starting point for the animation
      var numPixelsScrolledInRegion = parseFloat(window.pageYOffset)-wrapperStart;

      var scrollPercent = (100 * numPixelsScrolledInRegion)/(wrapperEnd-wrapperStart);

      var scrollPercentRounded = Math.round(scrollPercent);

      // Using pixel position from numPixelsScrolledInRegion to directly determine current frame
      var scrollToParam = ((scrollPercentRounded / 100) * (this.anim.totalFrames));

      // Ugly print statements for testing purposes :)
      // var numPixelsScrolled = window.pageYOffset;
      //
      // console.log("\nnumPixelsScrolled: ", numPixelsScrolled);
      // console.log("numPixelsScrolledInRegion: ", numPixelsScrolledInRegion);
      // console.log("Document Offset: " ,window.document.body.offsetHeight);
      // console.log("Wrapper Top: ", parseFloat(wrapperStart));
      // console.log("Wrapper Bottom: ", parseFloat(wrapperEnd));
      // console.log("Scroll % Rounded: " , scrollPercentRounded);
      // console.log("Frame rate: ", (this.anim.frameRate));
      // console.log("Total Frames: ", (this.anim.totalFrames));

      if((scrollToParam<this.anim.totalFrames)){
        this.anim.goToAndStop(scrollToParam-1, true)
      }
  };

  render() {
    return (
      <>
          <div id={this.props.lottieWrapperName}>
            <div id={this.props.lottieName}></div>
          </div>

        </>
      );
    }
  }

export default LottieSection
