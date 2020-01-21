import React, { Component } from "react";
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: "https://lh3.googleusercontent.com/HVzo-0pIZPTZbVrXXjpF9fufOi-mmBs2rYRsoAKo2k3ClLQhjnEcGjG7pdfeYfygFL6Ju1mX21RzbTvuMkZCTh3AYEJOVzWGma3ZtaA16lj9FseAesT_9ouyQ4HF7lLbUNwxH_fQF7SID3oGnc2_1BQ_WNE0ptN7EY-RIVpshfPAtopb-M5WJjExszMuAY74zN-saZKTd0QcFqtcdt3M2t86aDpj8XqJaa9OWGeac-KN9nNXz5HLip_vooJDN14A-Ebv7uFpvtIYOKF69gtpIfsyJPG679TxiYOJ77qNhLECcAzjlnzY7RTMmoeqj8Qj8rsiPQ2vIOawhrt-8O9v4mDSXQYlr58OUF5-7V3vhsQ2KeJIpv3wcCcVbEOikRfMl52U9lwjVo4Bjt-AwAZApW0uHQxoT2K-58BElZ3SlNrIJgMX91qv3tEfmrxpq34C-2In-YLL5XQYBElYhqi1rjiNi9UbdRxa0Y7uQ8wnI-PsqrKRnGKOUh9tBnoS-eucKMY8n59uq5zeRbv_-MmxGYQVz-TBMeM-3aOKnxlvZto-zeZ_5Ap8_RiE-_8r9YYW8WHHb5o5jUTeOE3Ti-b9WASKpvIOH9xOxCr4KYvkHAn0yAc3_52suhn-X_Q-31NLHYmkhnWtzI7hNipFJ-tn5PaYxriS6xGJWtBKun7LPjtXkAX_Sa7PWCw=w3426-h1714-no",
        thumbnail: "https://lh3.googleusercontent.com/HVzo-0pIZPTZbVrXXjpF9fufOi-mmBs2rYRsoAKo2k3ClLQhjnEcGjG7pdfeYfygFL6Ju1mX21RzbTvuMkZCTh3AYEJOVzWGma3ZtaA16lj9FseAesT_9ouyQ4HF7lLbUNwxH_fQF7SID3oGnc2_1BQ_WNE0ptN7EY-RIVpshfPAtopb-M5WJjExszMuAY74zN-saZKTd0QcFqtcdt3M2t86aDpj8XqJaa9OWGeac-KN9nNXz5HLip_vooJDN14A-Ebv7uFpvtIYOKF69gtpIfsyJPG679TxiYOJ77qNhLECcAzjlnzY7RTMmoeqj8Qj8rsiPQ2vIOawhrt-8O9v4mDSXQYlr58OUF5-7V3vhsQ2KeJIpv3wcCcVbEOikRfMl52U9lwjVo4Bjt-AwAZApW0uHQxoT2K-58BElZ3SlNrIJgMX91qv3tEfmrxpq34C-2In-YLL5XQYBElYhqi1rjiNi9UbdRxa0Y7uQ8wnI-PsqrKRnGKOUh9tBnoS-eucKMY8n59uq5zeRbv_-MmxGYQVz-TBMeM-3aOKnxlvZto-zeZ_5Ap8_RiE-_8r9YYW8WHHb5o5jUTeOE3Ti-b9WASKpvIOH9xOxCr4KYvkHAn0yAc3_52suhn-X_Q-31NLHYmkhnWtzI7hNipFJ-tn5PaYxriS6xGJWtBKun7LPjtXkAX_Sa7PWCw=w3426-h1714-no",
        thumbnailWidth: 348,
        thumbnailHeight: 174,
        caption: "2018 Men's Soccer Broncos Poster"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]


class SelectedWork extends Component {
  render() {
    return (
      <Gallery images={IMAGES} enableImageSelection={false}/>
    );
  }
}

export default SelectedWork;
