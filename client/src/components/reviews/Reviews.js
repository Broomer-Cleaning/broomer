import React from 'react'
import "./reviews.css";
import ReviewsCarousel from './ReviewsCarousel';

const Reviews = () => {
  return (
    <div id="reviews" className="reviews">
    <h1>our happy clients</h1>
    <div className="container">
      <div className="reviews-content">
        <ReviewsCarousel />
      </div>
    </div>
  </div>
  )
}

export default Reviews
