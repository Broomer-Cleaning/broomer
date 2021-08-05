import React, { useState } from "react";
import { Form, Row, Button, Container, Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../../../utils/mutation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formStyli.css";

const AddJobForm = (onJobAdded) => {
  const [title, setTitle] = useState("");
  const [job_description, setJob_description] = useState("");
  const [street_address, setStreet_address] = useState("");
  const [postal_code, setPostal_code] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [addJob, { error }] = useMutation(ADD_JOB);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addJob({
        variables: {
          title,
          job_description,
          street_address,
          city,
          state,
          postal_code,
        },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
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
              value={title}
              
              type="text"
              placeholder="Car washing"
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              value={job_description}
              type="text"
              placeholder="Description"
              onChange={(event) => setJob_description(event.target.value)}
              style={{ height: "100px" }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-1" id="formGridCheckbox">
            <Form.Label>Mask Required</Form.Label>
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
        </Row>

        <Form.Group className="mb-1" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={street_address}
            placeholder="1234 Main St"
            onChange={(event) => setStreet_address(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-1">
          <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              placeholder="Your City"
              onChange={(event) => setCity(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              value={state}
              placeholder="State"
              onChange={(event) => setState(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postal_code}
              placeholder="A0A 0A0"
              onChange={(event) => setPostal_code(event.target.value)}
            />
          </Form.Group>
        </Row>

        <hr />

        <h4>Health Information</h4>

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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddJobForm;