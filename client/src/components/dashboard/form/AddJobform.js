import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../dashboard.css"
import { useHistory } from 'react-router-dom';


import { Form, Row, Button, Container, Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../../../utils/mutation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formStyli.css";

const AddJobForm = (onJobAdded) => {
  const [titleValue, setTitleValue] = useState("");
  const [job_description, setJob_description] = useState("");
  const [safety_mask, setSafety_mask] = useState("")
  const [street_address, setStreet_address] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [safety_double_vax, setisFullyVax] = useState("")
  const [safety_police_check, setPoliceCheck] = useState("")
  const [need_equipment_worker, setNeed_equipment_worker] = useState("")
  const [have_equipment_employer, setHave_equipment_employer] = useState("")
  const [have_pets, setHave_pets] = useState("")

  let history = useHistory();
  const [addJob, { error }] = useMutation(ADD_JOB);

  const handleFormSubmit = async (event) => {
    // event.preventDefault();

    try {
      console.log({
                variables: {
          
          title: titleValue,
          job_description,
          street_address,
          postal_code,
          safety_police_check,
          safety_double_vax,
          safety_mask,
          have_equipment_employer,
          need_equipment_worker,
          have_pets
        },
      })

      // const { data } = await addJob({
      //   variables: {
          
      //     title: titleValue,
      //     job_description,
      //     street_address,
      //     postal_code,
      //     safety_police_check,
      //     safety_double_vax,
      //     safety_mask,
      //     have_equipment_employer,
      //     need_equipment_worker,
      //     have_pets
      //   },
      // });

      // history.push(`/dashboard/${data.addJob.title}`);
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePoliceCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      // console.log(boolVal, typeof boolVal)
      setPoliceCheck(boolVal)
    }
  }

  const handleEquipmentEmployerCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      // console.log(boolVal, typeof boolVal)
      setNeed_equipment_worker(boolVal)
    }
  }

  const handleEquipmentWorkerCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      // console.log(boolVal, typeof boolVal)
      setHave_equipment_employer(boolVal)
    }
  }

  const handlePetsCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      // console.log(boolVal, typeof boolVal)
      setHave_pets(boolVal)
    }
  }

  const handleMaskCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      // console.log(boolVal, typeof boolVal)
      setSafety_mask(boolVal)
    }
  }

  const handleVaxCheckbox = (event) => {
    console.log(event.target)
    const { id } = event.target;
    const idArr = id.split("-");
    if (idArr.length === 2) {
      const boolVal = idArr[1] === 'true';
      setisFullyVax(boolVal)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target)
    console.log(name, value)


    // Based on the input type, we set the state of either email, username, and password
    if (name === 'jobTitle') {
      setTitleValue(value);
      console.log("hello")
    } else if (name === 'description') {
      setJob_description(value);
    } else if (name === 'address') {
      setStreet_address(value);
    } else if (name === 'postl') {
      setPostal_code(value);
    } 
  };

  return (
    <Container className=" baiscInfo m-5  p-2">
      <Form onSubmit={handleFormSubmit}>
        <h4 className="mt-4">Basic Informtion</h4>
        <Row className="mb-1">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              value={titleValue}
              type="text"
              name="jobTitle"
              placeholder="Car washing"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              value={job_description}
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-1" id="formGridCheckbox">
                <Form.Label>Police Check</Form.Label>
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

        </Row>
        <Row>
          <Form.Group className="mb-1" id="formGridCheckbox">
            <Form.Label>Mask Required</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="YES"
                name="mask"
                id="formHorizontalRadios1"
                onChange={handleMaskCheckbox}
              />
              <Form.Check
                type="radio"
                label="NO"
                name="mask"
                id="formHorizontalRadios2"
              />
            </Col>
          </Form.Group>
        </Row>

        <Form.Group className="mb-1" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={street_address}
            name="address"
            placeholder="1234 Main St"
            onChange={handleChange}
          />
        </Form.Group>
        <Row className="mb-1">
          <Form.Group controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postal_code}
              name="postl"
              placeholder="A0A 0A0"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <hr/>
        <h4 className="mt-4">Utilty Information</h4>


        <Row>
          <Form.Group className="mb-1" id="formGridCheckbox">
            <Form.Label>Equipment Provided</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="YES"
                name="equipment"
                id="formHorizontalRadios1"
                onChange={handleEquipmentEmployerCheckbox}
              />
              <Form.Check
                type="radio"
                label="NO"
                name="equipment"
                id="formHorizontalRadios2"
                onChange={handleEquipmentEmployerCheckbox}
              />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-1" id="formGridCheckbox">
            <Form.Label>Need to Bring Equipment</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="YES"
                name="bringEquipment"
                id="formHorizontalRadios1"
                onChange={handleEquipmentWorkerCheckbox}
              />
              <Form.Check
                type="radio"
                label="NO"
                name="bringEquipment"
                id="formHorizontalRadios2"
                onChange={handleEquipmentWorkerCheckbox}
              />
            </Col>
          </Form.Group>
        </Row>

        <hr />

        <h4>Health Information</h4>
        <Row>
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
        </Row>
        <Row>
          <Form.Group className="mb-1" id="formGridCheckbox">
            <Form.Label>Have Pets</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="YES"
                name="pets"
                id="formHorizontalRadios1"
                onChange={handlePetsCheckbox}
              />
              <Form.Check
                type="radio"
                label="NO"
                name="pets"
                id="formHorizontalRadios2"
                onChange={handlePetsCheckbox}
              />
            </Col>
          </Form.Group>
        </Row>
        <hr/>
        <Link to="/dashboard">
        <Button variant="primary" type="submit" onClick={() => handleFormSubmit()}>
          Submit
        </Button>
        </Link>
        <Link to="/dashboard">
        <Button variant="dark" type="submit">
          Back to Dashborad
        </Button>
        </Link>
      </Form>
    </Container>
  );
};

export default AddJobForm;
