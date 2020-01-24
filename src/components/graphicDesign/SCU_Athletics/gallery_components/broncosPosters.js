import React, { Component } from "react";
import Gallery from 'react-grid-gallery';


class SelectedWork extends Component {
  render() {
    const IMAGES =
    [{
            src: "https://live.staticflickr.com/65535/49429686826_06b80c7092_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429686826_2bf98bda68.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "2018 Women's Soccer Broncos Poster"
    },
    {
            src: "https://live.staticflickr.com/65535/49429179698_e7d331bb43_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429179698_b281c76203.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "2018 Men's Soccer Broncos Poster"
    },
    {
            src: "https://live.staticflickr.com/65535/49429878607_3990f06698_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429878607_45cc46633c.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "2019 Women's Basketball Broncos Poster"
    },
    {
            src: "https://live.staticflickr.com/65535/49429079152_6c64599bfc_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429079152_a5d785500d.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "2018 Men's Basketball Broncos Poster"
    },
    {
            src: "https://live.staticflickr.com/65535/49429878607_3990f06698_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49429878607_45cc46633c.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 200,
            caption: "2019 Women's Basketball Broncos Poster"
    }]
    return (
      <Gallery images={IMAGES} rowHeight="200" enableImageSelection={false}/>
    );
  }
}

export default SelectedWork;
