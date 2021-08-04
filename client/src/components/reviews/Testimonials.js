import React, { useState } from 'react'
import "./testimonials.css";
import {FaStar} from "react-icons/fa";

import { useMutation } from '@apollo/client';
import {ADD_REVIEW_WORKER} from "../../utils/mutation"

// import Axios from "axios"

// import {ADD_REVIEW_WORKER} from "../../utils/mutation"
// import { useMutation } from '@apollo/react-hooks';
// import Auth from '../../utils/auth';

const colors = {
  yellow: "#F2B212",
  blue: "#4473b7"
}

const Testimonials = () => {

//  const [reviews, setReviews] = useState('');
//  const [getReviews, { loading, data, error}] = useMutation(ADD_REVIEW_WORKER, {
//    variables: {stars: '', body: ''}
//  });

 
//  if (data) {
//    console.log(data)
//  }
  
  const [reviews, setReviews] = useState({body: '' }); 
  const [addReview] = useMutation(ADD_REVIEW_WORKER);


  const handleChange= (event) => {
    const { name, value } = event.target;
    setReviews({ ...reviews, [name]: value });
    console.log(value)

  };

  const handleFormSubmit = async () => {
    // event.preventDefault(); 

    console.log("Hello")
    
      // const { data } = addReview({ variables: { ...reviews } });
      // console.log(data);

      addReview({variables: {
        stars: currentValue,
        body: reviews.body
      }})
      
    

   

    // Axios.post({
    //   stars: currentValue,
    //   body: reviews.body
    // })
    // .then(res=> {
    //   console.log(res.reviews)
    //   console.log(currentValue)
    // })

    // const payload = {
    //  stars: currentValue,
    //  body: reviews.body

    // };
   

    // axios({
    //   url: 'http://localhost:3001/user-routes/savereviews',
    //   method: 'POST',
    //   data: payload
    // })
    // .then(() => {
    //   console.log('Data has been sent to the server');

    // })
    // .catch (() => {
    //   console.log('Data has been sent to the server');
    // });

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
      {/* onClick={() => addReview()} */}
      <button onClick={() => handleFormSubmit()} type="submit" className="testB">Submit</button>
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
