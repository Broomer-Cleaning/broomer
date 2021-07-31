import React from 'react'
import "./testimonials.css";
import {FaStar} from "react-icons/fa";

// import {SAVE_REVIEW} from "../../utils/mutation"
// import { useMutation } from '@apollo/react-hooks';
// import Auth from '../../utils/auth';

const colors = {
  yellow: "#F2B212",
  blue: "#4473b7"
}

const Testimonials = () => {

  // const [savedReviewIds, setSavedReviewIds] = useState(getSavedReviewIds());

  // const [saveReviews] = useMutation(SAVE_REVIEW);

  // const handleSaveReview = async (reviewId) => {
    
  //    // get token
  //    const token = Auth.loggedIn() ? Auth.getToken() : null;
 
  //    if (!token) {
  //      return false;
  //    }
 
  //    try {
  //      console.log('reviewToSave', reviewToSave);
  //      const { data } = await saveReviews({
  //        variables: { bookData: { ...reviewToSave } }
  //      });
  //      console.log('data', data);
 
  //      // if review successfully saves to user's account, save review id to state
  //      setSavedReviewIds([...savedReviewIds, reviewToSave.reviewId]);
  //    } catch (err) {
  //      console.error(err);
  //    }
  // }




  const stars = Array(5).fill(0);
  const[currentValue, setCurrentValue]=React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

 const handleMouseLeave = () => {
   setHoverValue(undefined)
 }
  return (
    <div className="testimonials" style={style.container}>
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
       />
        )
      
      })}
      </div>
      <textarea
      placeholder="Please leave your feedback here"
      style={style.textarea}
      />
      <button style={style.button}>Submit</button>
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

  },
  button: {
    border: "1px solid #4473b7",
    width: 300,
    padding: 10,
    marginBottom: "4rem"

  }
}

export default Testimonials
