import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../../Footer/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/add.css';

function Hospital() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
        <div id="colour">
        <Navbar />
        <div id="new">
        <Card id='SignOutCard'>
        <Card.Body>
        <Card.Header>
        <Card.Title>Add Patients</Card.Title>
        </Card.Header>
        <br/>
        <Card.Text>
        <Form id="addDoctor" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter First Name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Last Name.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email ID"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Text id="inputGroupPrepend">@example.com</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Please Enter your Email ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State/Union Territory</Form.Label>
          <Form.Select defaultValue="Choose State/Union Territory" required>
          <Form.Control required as="select" type="select"></Form.Control>
          <option value="">Choose State...</option>
          <option value="1">Andhra Pradesh</option>
          <option value="2">Arunachal Pradesh</option>
          <option value="3">Assam</option>
          <option value="4">Bihar</option>
          <option value="5">Chhattisgarh</option>
          <option value="32">D&D</option>
          <option value="6">Goa</option>
          <option value="7">Gujarat</option>
          <option value="8">Haryana</option>
          <option value="9">Himachal Pradesh</option>
          <option value="30">Jammu and Kashmir</option>
          <option value="10">Jharkhand</option>
          <option value="11">Karnataka</option>
          <option value="12">Kerala</option>
          <option value="31">Ladakh</option>
          <option value="13">Madhya Pradesh</option>
          <option value="14">Maharashtra</option>
          <option value="15">Manipur</option>
          <option value="16">Meghalaya</option>
          <option value="17">Mizoram</option>
          <option value="18">Nagaland</option>
          <option value="19">Odisha</option>
          <option value="20">Punjab</option>
          <option value="21">Rajasthan</option>
          <option value="22">Sikkim</option>
          <option value="23">Tamil Nadu</option>
          <option value="24">Telangana</option>
          <option value="25">Tripura</option>
          <option value="26">Uttar Pradesh</option>
          <option value="27">Uttarakhand</option>
          <option value="28">West Bengal</option>
          <option value="29">Arunachal Pradesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" pattern="^\d{6}$" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>Age</Form.Label>
          <Form.Control type="Number" placeholder="Age" required />
          <Form.Control.Feedback type="invalid">
            Enter your Age
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="dob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="dob" placeholder="Date of Birth" required />
        </Form.Group>

        <Form.Group as={Col} md="5" controlId="validationCustom03">
          <Form.Label>AADHAR Number</Form.Label>
          <Form.Control type="text" placeholder="AADHAR Number" pattern="^\d{12}$" required />
          <Form.Control.Feedback type="invalid">
            Enter AADHAR NUMBER
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} md="4">
          <Form.Label>Contact 1</Form.Label>
          <Form.Control type="tel" placeholder="XXXXXXXXXX" pattern="^\d{10}$" required/>
          <Form.Control.Feedback type="invalid">
            Enter your phone number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Contact 2</Form.Label>
          <Form.Control type="tel" placeholder="XXXXXXXXXX" pattern="^\d{10}$" required/>
          <Form.Control.Feedback type="invalid">
            Enter your phone number
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <br/>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
        <Footer />
        </div>
    </>
  )
}

export default Hospital;