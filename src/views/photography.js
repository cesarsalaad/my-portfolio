import React, { Component } from 'react';
//My additions

// Lottie
import * as lottie from 'lottie-web/build/player/lottie.js'
import animationData from '../lotties/novi_logo_animation_data.json'

class Photography extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Transform
      transform: 'none'
    }
  }

  anim;
  elem;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.elem = document.getElementById('bodymovin')

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
      var offsetBottom = this.elem.offsetTop + this.elem.offsetHeight

      // window.pageYOffset = A floating-point number specifying the number of pixels the Document is scrolled vertically within its containing Window. This number is subpixel precise, so it may not be an integer. A value of 0.0 indicates that the window is not scrolled vertically, and that the top of the document is located at the top edge of the window's content area.
      var numPixelsScrolled = window.pageYOffset;

      // is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.
      var offsetHeight = window.document.body.offsetHeight;

      // returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin
      var clientHeight = document.documentElement.clientHeight;

      var scrollPercent = 100 * numPixelsScrolled / (offsetBottom - clientHeight);

      var scrollPercentRounded = Math.round(scrollPercent);

      console.log("numPixelsScrolled: ", numPixelsScrolled)
      console.log("Offset Bottom: ", parseFloat(offsetBottom))
      console.log("Scroll % Rounded: " , scrollPercentRounded)
      console.log("Frame count: ", (scrollPercentRounded / 100) * this.anim.totalFrames );

      this.anim.goToAndStop( (scrollPercentRounded / 100) * 4000)
  };

  render() {
    return (
        <div className="container-sm">
          <div className="py-4">
            <h1 className="display-2 text-center">Software</h1>
            <h3 className="text-center">These are my software projects, behold.</h3>
          </div>
          <div id="bodymovin novi" className=""></div>
        </div>
    );
  }
}

export default Photography;
