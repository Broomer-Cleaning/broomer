import React from 'react'
import "./reviews.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Avatar Imports
import avatar1 from "./img/avatar-1.png";
import avatar2 from "./img/avatar-2.png";
import avatar3 from "./img/avatar-3.png";
import avatar4 from "./img/avatar-4.png";

const ReviewsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}
  >
    <>
      <img src={avatar1} alt="Slavic O" />
      <div className="myCarousel">
        <h3>Slavic O</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
      </div>
    </>
    <>
      <img src={avatar2} alt="Anastasia S" />
      <div className="myCarousel">
        <h3>Anastasia S</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
      </div>
    </>
    <>
      <img src={avatar3} alt="Ahmed H" />
      <div className="myCarousel">
        <h3>Ahmed H</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
      </div>
    </>
    <>
      <img src={avatar4} alt="Daniel P" />
      <div className="myCarousel">
        <h3>Daniel P</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
      </div>
    </>
  </Carousel>
  )
}

export default ReviewsCarousel
