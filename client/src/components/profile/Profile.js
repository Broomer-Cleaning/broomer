import "./profile.css";
import React from "react";
import avtar from "../profile/img/avatar.jpeg";
import {Mail, Language, PhoneIphone} from "@material-ui/icons";

import ReviewsCarousel from "../reviews/ReviewsCarousel";
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <Container>
      <div className="aboutMeSection">
      <img  className="avatr" src={avtar} alt="avatr" />
      <h1 className="fullName">Ahmed Hakeem</h1>
      <div className="itemContainer">
                        <Language className="icon"/>
                        <a href="https://google.com"><span>GitHub</span></a>
                        <Mail className="icon"/>
                        <a href="mailto:test@addres.com"><span>Email</span></a>
                        <PhoneIphone className="icon"/>
                        <a href="tel:+1 555 555 5555"><span>Call Me</span></a>
                    </div>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      </div>
      </Container>
      <div className="container">
        <div className="reviews-content">
          <ReviewsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Profile;
