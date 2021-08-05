import React from 'react'

import { useQuery } from "@apollo/client";
import {GET_ME} from "../../../utils/queries"

import {Container} from "react-bootstrap"


import avatar from "../createdprofile/img/avatar.jpeg";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import ReviewsCarousel from "../../reviews/ReviewsCarousel";

const CreatedProfile = () => {

  const { loading, data } = useQuery(GET_ME);
  let userData=""
  if (loading) {
    console.log("Loading");
  } else {
    userData = data?.me || {};
    console.log(userData.first_name);
  }
  return (
   
      <Container >
        <div className="profileSection">
          <img className="avatar" src={avatar} alt="avatr" />
            <div className="itemContainer">

          <h2>{userData.first_name && userData.last_name}</h2>
         
            <AiOutlineMail className="icon" size={24} />
            <a href="mailto:test@addres.com">
              <span>Email</span>
            </a>
            <MdPhoneIphone className="icon" size={24} />
            <a href={userData.phone_number}>
              <span>Call Me</span>
            </a>
          </div>

          <p>
          {userData.about_me}
          </p>

           {/* <div> */}
            {/* <Container className="editFrom"> */}
              {/* onClick={openModal} */}
              {/* <Button variant="warning" className="btn" >
                Click to edit
              </Button> */}
              {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            {/* </Container> */}
          {/* </div> */}

          <Container>
          <div className="reviws">
            <h2 className="sectionTital">My Reviews</h2>
            <div className="content">
              <ReviewsCarousel />
            </div>
          </div>
        </Container>

        </div>
        </Container>
    
  )
}

export default CreatedProfile
