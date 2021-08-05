import React, {useState} from 'react'

import { useQuery } from "@apollo/client";
import {GET_ME} from "../../utils/queries"



import "./reviews.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Avatar Imports
import avatar1 from "./img/avatar-1.png";
import avatar2 from "./img/avatar-2.png";
import avatar3 from "./img/avatar-3.png";
import avatar4 from "./img/avatar-4.png";

const ReviewsCarousel = () => {

  // const [reviews, setReviews]=useState({stars: 5})
  // const stars = reviews.review_score_worker

  const { loading, data } = useQuery(GET_ME);
  let userData=""
  if (loading) {
    console.log("Loading");
  } else {
    userData = data?.me || {};
    // setReviews(stars)
    console.log(userData.username);
    console.log(userData.jobs_worked.review_text_worker)
  }

  // const {  data } = useQuery(GET_ALL_JOBS);
  // let jobsData=""
 
  //   jobsData = data?.jobs || {};
    
  //   console.log(jobsData.review_text_worker);
   
  




  //const [reviews, setReviews]=useState({stars: 5})
  //const stars = reviews.stars

  //useEffect(()=> {
 //fetch(`${reviews}`)
 //.then(response => response.json())
 //.then(json =>)
  //}, [reviews])
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
