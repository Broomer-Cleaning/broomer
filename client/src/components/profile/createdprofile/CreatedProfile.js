import React from 'react'

import "./createprofile.css";

import { useQuery } from "@apollo/client";
import {GET_ME} from "../../../utils/queries"

import { useMutation } from "@apollo/client";
import {UPDATE_PROFILE} from "../../../utils/mutation"

import {Container} from "react-bootstrap"


import avatar from "../createdprofile/img/avatar.jpeg";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import ReviewsCarousel from "../../reviews/ReviewsCarousel";

const CreatedProfile = () => {

  const [profileDetails, { error }] = useMutation(UPDATE_PROFILE);

  // const { data } = profileDetails({
  //   variables: {
  //     first_name,
  //     last_name,
  //     date_of_birth,
  //     phone_number,
  //     about_me
  //   }
  // })

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
          

          <h2>{userData.first_name}   {userData.last_name}</h2>
          <div className="itemContainer">
          
           <div className="emailPhone">
            <AiOutlineMail className="icon" size={24} />
            <a href="mailto:test@addres.com">
              <span>Email</span>
            </a>
            <MdPhoneIphone className="icon" size={24} />
            <a href={userData.phone_number}>
              <span>Call Me</span>
            </a>
            </div>
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
