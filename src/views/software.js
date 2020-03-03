import React, { Component } from 'react';
//My additions
import Gallery from 'react-grid-gallery';

// Lottie
import * as lottie from 'lottie-web/build/player/lottie.js'
import animationData from '../lotties/novi_logo_animation_data.json'

class Software extends Component {
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
    this.elem_wrapper = document.getElementById('lottie-novi-wrapper')
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
      var offsetBottom = this.elem_wrapper.offsetTop + this.elem_wrapper.offsetHeight - this.nav_offset.offsetHeight

      // window.pageYOffset = A floating-point number specifying the number of pixels the Document is scrolled vertically within its containing Window. This number is subpixel precise, so it may not be an integer. A value of 0.0 indicates that the window is not scrolled vertically, and that the top of the document is located at the top edge of the window's content area.
      var numPixelsScrolled = window.pageYOffset;

      // is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.
      var offsetHeight = window.document.body.offsetHeight- this.nav_offset.offsetHeight;

      // returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin
      var clientHeight = document.documentElement.clientHeight;

      var scrollPercent = 100 * numPixelsScrolled / (offsetBottom-clientHeight);

      var scrollPercentRounded = Math.round(scrollPercent);

      var scrollToParam = ( (scrollPercentRounded / 100) * (this.anim.totalFrames* this.anim.frameRate));

      console.log("numPixelsScrolled: ", numPixelsScrolled)
      console.log("Document Offset: " ,window.document.body.offsetHeight)
      console.log("Offset Bottom: ", parseFloat(offsetBottom))
      console.log("Scroll % Rounded: " , scrollPercentRounded)
      console.log("Frame count: ", (scrollPercentRounded / 100) * (this.anim.totalFrames* this.anim.frameRate) );
      console.log("Total Frames: ", (this.anim.totalFrames* this.anim.frameRate));

      this.anim.goToAndStop(scrollToParam)
  };

  render() {
    const IMAGES =
    [{
            src: "https://live.staticflickr.com/65535/49429686826_06b80c7092_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429686826_2bf98bda68.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "Main Menu"
    },
    {
            src: "https://live.staticflickr.com/65535/49429179698_e7d331bb43_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429179698_b281c76203.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "Scan Notes Example"
    },
    {
            src: "https://live.staticflickr.com/65535/49429878607_3990f06698_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429878607_45cc46633c.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "Explore Navigation Example"
    }]
    return (
      <>
        <body>
          <div id="lottie-novi-wrapper">
            <h1 className="display-2 text-center">Software</h1>
            <h3 className="text-center">These are my software projects, behold.</h3>
            <div id="bodymovin" className="medium-lottie"></div>
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

            <section>
              <div className="py-3">
                <h2>
                  The Problem
                </h2>
                <p>
                  Visually impaired students face extra challenges when it comes to the basic necessity of note-taking. Current assistive technology is fragmented in function. These students often need to combine solutions such as voice recording lectures,hiring someone to transcribe notes to braille, hiring a reader, etc. The amount of time and money they need for these solutions proves to be a great disadvantage, and we wish to provide an easier solution that will give these students a more independent and productive learning experience.
                </p>
              </div>
            </section>

            <section>
              <div className="py-3">
                <h2>
                  Our Goal
                </h2>
                <p>
                  Our solution is an application that can offer intuitive, convenient, and comprehensive access to notes for the visually impaired. We would implement our solution through an iOS mobile application that would allow users to upload handwritten or text notes so that they could be organized and accessed through voice prompts. Users with visual disabilities would then have a platform to store and organize their notes in order to make it easier to learn independently.
                </p>
              </div>
            </section>

            <section>
              <div className="py-3">
                <h2>
                  My Process
                </h2>
                <p>
                  I saw this project as an opportunity to put my interest in UX into practice. In an accessibility app, usability  My first instinct was to take my notes from the Nielsen Norman GroupDespite primarily looking at these quality components in the context of visual interfaces, the principle intentions remain the same
                </p>
                <h4>
                  Research
                </h4>
                <h4>
                  Wireframes
                </h4>
                <h4>
                  Final Prototype
                </h4>
                <Gallery images={IMAGES} rowHeight="200" enableImageSelection={false}/>
              </div>
            </section>

            <section>
              <div className="py-3">
                <h2>
                  Next Steps
                </h2>
                <p>
                  I saw this project as an opportunity to put my interest in UX into practice. In an accessibility app, usability  My first instinct was to take my notes from the Nielsen Norman GroupDespite primarily looking at these quality components in the context of visual interfaces, the principle intentions remain the same
                </p>
              </div>
            </section>

          </div>
        </body>
      </>
    );
  }
}

export default Software;
