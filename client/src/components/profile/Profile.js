import "./profile.css";
import "./modal.css";
import React, { useState } from "react";
import Modal from "./Modal";
import avtar from "../profile/img/avatar.jpeg";
import { Button } from "react-bootstrap";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import ReviewsCarousel from "../reviews/ReviewsCarousel";
import { Container } from "react-bootstrap";


import { useQuery } from "@apollo/client";
import {GET_ME} from "../../utils/queries"



const Profile = () => {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  const { loading, data } = useQuery(GET_ME);
    let userData = "";
  if (loading) {
    console.log("Loading");
  } else {
    const userData = data?.me || {};
    console.log(userData.username);
  }
  
  return (
    <div>
      <Container>
        <div className="aboutMeSection">
          {/* <img className="avatr" src={avtar} alt="avatr" /> */}
          <h1 className="fullName"> Hello, {userData.username}!</h1>
          <Button  className="btn btn-primary prof" >
                Create Profile
              </Button>
          <div className="itemContainer">
         
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
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
          </p>
          <div>
            <Container className="editFrom">
              {/* onClick={openModal} */}
              {/* <Button variant="warning" className="btn" >
                Click to edit
              </Button> */}
              {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            </Container>
          </div>
        </div>
        <Container>
          <div className="reviws">
            <h2 className="sectionTital">My Reviews</h2>
            <div className="content">
              <ReviewsCarousel />
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Profile;
