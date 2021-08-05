import React, { useState } from 'react'

import { Link } from "react-router-dom";

import "./testimonials.css";
import {FaStar} from "react-icons/fa";

import { useMutation } from '@apollo/client';
import {ADD_REVIEW_WORKER} from "../../utils/mutation"



const colors = {
  yellow: "#F2B212",
  blue: "#4473b7"
}

const Testimonials = () => {


  
  const [reviews, setReviews] = useState({body: '' }); 
  const [addReviewWorker] = useMutation(ADD_REVIEW_WORKER);


  const handleChange= (event) => {
    const { name, value } = event.target;
    setReviews({ ...reviews, [name]: value });
    console.log(value)

  };

  const handleFormSubmit = async () => {
    // event.preventDefault(); 

    console.log("Hello")
   
      addReviewWorker({variables: {
        jobId: '610b3b6c2f8b7d3c65d5981d',
        review_score_worker: currentValue,
        review_text_worker: reviews.body
      }})

     

  };
  

  const stars = Array(5).fill(0);
  const[currentValue, setCurrentValue]=React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
    console.log(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

 const handleMouseLeave = () => {
   setHoverValue(undefined)
 }
 
  return (
    <div className="testimonials" style={style.container} onSubmit={handleFormSubmit}>
      <h2>Please leave your Feedback</h2>
      <div style={style.stars}>
        {stars.map((_, index)=> {
          return (
       <FaStar
          key={index}
          size={24}
          style={{
            marginRight: 10,
            cursor: "pointer"

          }}
          color={(hoverValue || currentValue) > index ? colors.yellow : colors.blue}
          onClick={()=> handleClick(index + 1)}
          onMouseOver={()=> handleMouseOver(index + 1)}
          onMouseLeave={handleMouseLeave}
          // name="stars"
          // value={reviews.stars}
          onChange={handleClick}
       />
        )
      
      })}
      </div>
      <textarea
      placeholder="Please leave your feedback here"
      style={style.textarea}
      name="body"
      value={reviews.body}
      onChange={handleChange}
      />
      <Link to="/dashboard">
      <button onClick={() => handleFormSubmit()} type="submit" className="testB">Submit</button>
      </Link>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  textarea: {
    border: "1px solid #4473b7",
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10

  }
 
}

export default Testimonials
