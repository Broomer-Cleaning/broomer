import React from 'react'

import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries"



import "./reviews.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Avatar Imports
import avatar1 from "./img/avatar-1.png";
import avatar2 from "./img/avatar-2.png";
import avatar3 from "./img/avatar-3.png";
import avatar4 from "./img/avatar-4.png";

const ReviewsCarousel = () => {


  const { loading, data } = useQuery(GET_ME);
  let userData = ""
  let reviewsArr = [];
  if (loading) {
    console.log("Loading");
  } else {
    userData = data?.me || {};
    console.log(userData)
    console.log(userData.jobs_worked)
    const { jobs_worked } = userData;
    if (!!jobs_worked && jobs_worked.length > 0) {
      jobs_worked.forEach(job => {
        const reviewObj = {
          review: job.review_text_worker,
          // starts: ...etc
        }
        reviewsArr.push(reviewObj)
      });
    }
  }

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
          <h3>{userData.first_name}  {userData.last_name}</h3>
          <p>{userData.review_score_worker} Stars</p>
          <p>{userData.review_text_worker}</p>
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
