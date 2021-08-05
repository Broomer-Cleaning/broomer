import "./profile.css";
import "./modal.css";
import React, { useState } from "react";
import {Form, Row, Button, Container, Col} from "react-bootstrap"
// import Modal from "./Modal";
// import avtar from "../profile/img/avatar.jpeg";

import { MdPhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import ReviewsCarousel from "../reviews/ReviewsCarousel";



import { useQuery } from "@apollo/client";
import {GET_ME} from "../../utils/queries"

import { useMutation } from "@apollo/client";
import {UPDATE_PROFILE} from "../../utils/mutation"



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

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [about_me, setAbout_me] = useState("");
  

  const [profileDetails, { error }] = useMutation(UPDATE_PROFILE);

  const handleChange= (event) => {
    const { name, value } = event.target;
    setFirst_name({ ...profileDetails, [name]: value });
    console.log(value)
    setLast_name({ ...profileDetails, [name]: value });
    console.log(value)
    setDate_of_birth({ ...profileDetails, [name]: value });
    console.log(value)
    setPhone_number({ ...profileDetails, [name]: value });
    console.log(value)
    setAbout_me({ ...profileDetails, [name]: value });
    console.log(value)

  };

  const handleFormSubmit = async () => {
    // event.preventDefault();

    try {
      const { data } = await profileDetails({
        variables: {
          first_name:profileDetails.first_name,
          last_name:profileDetails.last_name,
          date_of_birth:profileDetails.date_of_birth,
          phone_number:profileDetails.phone_number,
          about_me:profileDetails.about_me
        },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  
  

  
  return (
    <div>
      <Container >
        <div className="aboutMeSection">
          {/* <img className="avatr" src={avtar} alt="avatr" /> */}
          <h1 className="fullName"> Welcome to your new profile page, {userData.username}!</h1>
          <p>Please fill the form below to instantly apply for or create a job</p>
          

            <Form onSubmit={handleFormSubmit}>
             <Row className="mb-3">
             <Form.Group as={Col} controlId="formGridEmail">
             <Form.Label>First Name</Form.Label>
              <Form.Control 
              value = {first_name}
              type="name" 
              name="first"
              placeholder="John" 
              // onChange={(event) => setFirst_name(event.target.value)}
              onChange={handleChange}
              />
             </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword" >
              <Form.Label>Last Name</Form.Label>
             <Form.Control 
             
             value={last_name}
             type="name" 
             name="last"
             placeholder="Smith" 
            //  onChange={(event) => setLast_name(event.target.value)}
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
              // onChange={(event) => setDate_of_birth(event.target.value)}
              onChange={handleChange}
              />
             </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone number</Form.Label>
             <Form.Control 
             value= {phone_number}
             type="text" 
             name="phone"
             placeholder="111-111-111" 
            //  onChange={(event) => setPhone_number(event.target.value)}
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
            //  onChange={(event) => setAbout_me(event.target.value)}
            onChange={handleChange}
             />
             </Form.Group>

             <Form.Group className="mb-1" id="formGridCheckbox">
          <Form.Label>Fully Vacinated</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="YES"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="NO"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-1" id="formGridCheckbox">
          <Form.Label>Able to provide police check</Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="YES"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="NO"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
           </Col>
           </Form.Group>

           <Form.Group className="mb-3">
             <br/>
         <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
         />
         </Form.Group>

           

             <Button  className="btn btn-primary prof text-center" onClick={() => handleFormSubmit()} >
                Create Profile
              </Button>
             </Form>
          {/* <div className="itemContainer">
         
            <AiOutlineMail className="icon" size={24} />
            <a href="mailto:test@addres.com">
              <span>Email</span>
            </a>
            <MdPhoneIphone className="icon" size={24} />
            <a href={userData.phone_number}>
              <span>Call Me</span>
            </a>
          </div> */}
         
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
          {/* <div> */}
            {/* <Container className="editFrom"> */}
              {/* onClick={openModal} */}
              {/* <Button variant="warning" className="btn" >
                Click to edit
              </Button> */}
              {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
            {/* </Container> */}
          {/* </div> */}
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
