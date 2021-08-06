import React, { useState } from "react";
import { Form, Row, Button, Container, Col } from "react-bootstrap"


import "./profile.css";
import "./createprofile.css";
import "./modal.css"


import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries"

import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../utils/mutation"

import avatar from "../profile/img/avatar.jpeg";
import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import ReviewsCarousel from "../reviews/ReviewsCarousel";



const Profile = () => {

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [safety_double_vax, setisFullyVax] = useState("")
  const [safety_police_check, setPoliceCheck] = useState("")


  const [profileDetails, { error }] = useMutation(UPDATE_PROFILE);

  const { loading, data } = useQuery(GET_ME);
  let userData = ""
  if (loading) {
    console.log("Loading");
  } else {
    userData = data?.me || {};
  }

  const handlePoliceCheckbox = (event) => {
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      setPoliceCheck(boolVal)
    }
  }

  const handleVaxCheckbox = (event) => {
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      setisFullyVax(boolVal)
    }
  }

  const handleChange = (event) => {
    const { name, value, id } = event.target;



    // Based on the input type, we set the state 
    if (name === 'first') {
      setFirst_name(value);
    } else if (name === 'last') {
      setLast_name(value);
    } else if (name === 'dob') {
      setDate_of_birth(value);
    } else if (name === 'phone') {
      setPhone_number(value);
    } else if (name === 'description') {
      setAbout_me(value);
    }

  };

  const handleFormSubmit = async () => {


    try {
      const { data } = await profileDetails({
        variables: {
          profileInput: {
            first_name,
            last_name,
            date_of_birth,
            phone_number,
            about_me,
            safety_double_vax,
            safety_police_check

          }
        },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      {!userData.first_name ? (
        <Container >

          <div className="aboutMeSection">

            <h1 className="fullName"> Welcome to your new profile page, {userData.username}!</h1>
            <p>Please fill the form below to instantly apply for or create a job</p>


            <Form onSubmit={handleFormSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    value={first_name}
                    type="name"
                    name="first"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword" >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="firstName"
                    value={last_name}
                    type="name"
                    name="last"
                    placeholder="Smith"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="dob">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    value={date_of_birth}
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    value={phone_number}
                    type="text"
                    name="phone"
                    placeholder="111-111-111"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What other users should know about you? </Form.Label>
                <Form.Control
                  value={about_me}
                  type="text"
                  name="description"
                  as="textarea"
                  rows={3}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-1" id="formGridCheckbox">
                <Form.Label>Fully Vacinated</Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="YES"
                    name="vax"
                    data-vax="yes"
                    id="vax-true"
                    onChange={handleVaxCheckbox}
                  />
                  <Form.Check
                    type="radio"
                    label="NO"
                    name="vax"
                    id="vax-false"
                    onChange={handleVaxCheckbox}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-1" id="formGridCheckbox">
                <Form.Label>Able to provide police check</Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="YES"
                    name="police"
                    title="YES"
                    id="police-true"
                    onChange={handlePoliceCheckbox}
                  />
                  <Form.Check
                    type="radio"
                    label="NO"
                    title="YES"
                    name="police"
                    id="police-false"
                    onChange={handlePoliceCheckbox}
                  />
                </Col>
              </Form.Group>

              <Form.Group className="mb-3">
                <br />
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                />
              </Form.Group>

              <Button className="btn btn-primary prof text-center" onClick={() => handleFormSubmit()} >
                Create Profile
              </Button>

            </Form>

          </div>
        </Container>
      ) : (
        <Container>
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

            <div className="about-mepar">

              <p>
                {userData.about_me}
              </p>
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
      )}
    </>

  );

};

export default Profile;
