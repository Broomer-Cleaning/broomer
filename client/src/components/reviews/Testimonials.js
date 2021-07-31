import React from 'react'
import "./testimonials.css";
import {FaStar} from "react-icons/fa";

const colors = {
  yellow: "#F2B212",
  blue: "#4473b7"
}

const Testimonials = () => {
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
