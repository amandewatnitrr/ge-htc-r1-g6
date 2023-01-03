import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../../Footer/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import './css/add.css';

function Hospital() {

  const navigate = useNavigate();

  let specialization = [
    {label: "Neurology", value: "neurology"},
    {label: "Cardiology", value: "cardiology"}
  ]

  let designation = [
    {label: "Senior", value: "senior"},
    {label: "Junior", value: "junior"},
    {label: "Intern", value: "intern"},
    {label: "Guest", value: "guest"}
  ]

  let cred = [
    {label: "MD", value: "md"},
    {label: "DO", value: "do"},
    {label: "MBBS", value: "mbbs"},
    {label: "PhD", value: "phd"}
  ]

  let country = [
      {label : "Choose state", value : ""},
      {label : "Andhra Pradesh", value : "andhra pradesh"},
      {label : "Arunachal Pradesh", value : "arunachal pradesh"},
      {label : "Assam", value : "assam"},
      {label : "Bihar", value : "bihar"},
      {label : "Chhattisgarh", value : "chhattisgarh"},
      {label : "D&D", value : "d&d"},
      {label : "Goa", value : "goa"},
      {label : "Gujrat", value : "gujrat"},
      {label : "Haryana", value : "haryana"},
      {label : "Himachal Pradesh", value : "himachal pradesh"},
      {label : "Jammu and Kashmir", value : "jammu and kashmir"},
      {label : "Jharkhand", value : "jharkhand"},
      {label : "Karnataka", value : "karnataka"},
      {label : "Kerala", value : "kerala"},
      {label : "Ladakh", value : "ladakh"},
      {label : "Madhya Pradesh", value : "madhya pradesh"},
      {label : "Maharashtra", value : "maharashtra"},
      {label : "Manipur", value : "manipur"},
      {label : "Meghalaya", value : "meghalaya"},
      {label : "Mizoram", value : "mizoram"},
      {label : "Nagaland", value : "nagaland"},
      {label : "Odisha", value : "odisha"},
      {label : "Punjab", value : "punjab"},
      {label : "Rajasthan", value : "rajasthan"},
      {label : "Sikkim", value : "sikkim"},
      {label : "Tamil Nadu", value : "tamil nadu"},
      {label : "Telangana", value : "telangana"},
      {label : "Tripura", value : "tripura"},
      {label : "Uttar Pradesh", value : "uttar pradesh"},
      {label : "Uttarakhand", value : "uttarakhand"},
      {label : "West Bengal", value : "west bengal"},
  ]

  const [countrycode, setCountrycode] = useState('');
  const [specializationcode, setSpecializationcode] = useState('');
  const [designationcode, setDesignationcode] = useState('');
  const [credcode, setCredcode] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [id, setId] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [contact, setContact] = useState('');
  const [contactb, setContactb] = useState('');

  const [validated, setValidated] = useState(false);

  const handleFirstname = (e) => {
      setFirstname(e.target.value);
      console.log(e.target.value)
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
    console.log(e.target.value)
  };

  const handleUsername = (e) => {
      setUsername(e.target.value);
      console.log(e.target.value)
  };

  const handleAddress = (e) => {
      setAddress(e.target.value);
      console.log(e.target.value)
  };

  const handleZip = (e) => {
      setZip(e.target.value);
      console.log(e.target.value)
  };

  const handleId = (e) => {
      setId(e.target.value);
      console.log(e.target.value)
  };
  
  const handleAadhar = (e) => {
    setAadhar(e.target.value);
    console.log(e.target.value)
  };

  const handleContact = (e) => {
      setContact(e.target.value);
      console.log(e.target.value)
  };

  const handleContactb = (e) => {
      setContactb(e.target.value);
      console.log(e.target.value)
  };

  const handleCountrycode = (e) => {
      setCountrycode(e.target.value);
  };
  
  const handleDesignationcode = (e) => {
    setCountrycode(e.target.value);
};

const handleSpecializationcode = (e) => {
  setCountrycode(e.target.value);
};

const handleCredcode = (e) => {
  setCountrycode(e.target.value);
};


  const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  if(firstname !== '' && lastname !== '' && username !== '' && zip !== '' && address !== '' && contact !== '' && contactb !== '' && id !== '' && countrycode !== '' && aadhar !== '' && designationcode !== '' && specializationcode !== '' && credcode !== ''){
      navigate("/Hospital");
  }

  setValidated(true);
  };

  return (
    <>
        <div style={{'background':' linear-gradient(grey,lightblue,grey)'}}>
        <Navbar />
        <div id="new">
        <Card id='SignOutCard'>
        <Card.Body>
        <Card.Header>
        <Card.Title>Add Doctors</Card.Title>
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
            onChange={handleFirstname}
            value={firstname}
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
            onChange={handleLastname}
            value={lastname}
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
              onChange={handleUsername}
              value={username}
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Enter Email ID
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required
          onChange={handleAddress}
          value={address}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State/Union Territory</Form.Label>
          <Form.Select onChange={handleCountrycode} required> 
            <option value="">Select a Country</option>
            {country.map((country) => <option value={country.value}>{country.label}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" pattern="^\d{6}$" required
          onChange={handleZip}
          value={zip}
          />
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
          <Form.Control type="text" placeholder="AADHAR Number" pattern="^\d{12}$" required 
          onChange={handleAadhar}
          value={aadhar}
          />
          <Form.Control.Feedback type="invalid">
            Enter AADHAR NUMBER
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Doctor Registration ID</Form.Label>
          <Form.Control type="text" placeholder="Doctor Registration ID" required 
          onChange={handleId}
          value={id}
          />
          <Form.Control.Feedback type="invalid">
            Enter Registration ID
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Contact 1</Form.Label>
          <Form.Control type="tel" placeholder="XXXXXXXXXX" pattern="^\d{10}$" required
          onChange={handleContact}
          value={contact}
          />
          <Form.Control.Feedback type="invalid">
            Enter your phone number
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Contact 2</Form.Label>
          <Form.Control type="tel" placeholder="XXXXXXXXXX" pattern="^\d{10}$" 
          onChange={handleContactb}
          value={contactb}
          required
          />
          <Form.Control.Feedback type="invalid">
            Enter your phone number
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br />

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="formGridState">
          <Form.Label>Specialization</Form.Label>
          <Form.Select onChange={handleSpecializationcode}> 
            <option value="">Select a Specialization</option>
            {specialization.map((specialization) => <option value={specialization.value}>{specialization.label}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGridState">
          <Form.Label>Designation</Form.Label>
          <Form.Select onChange={handleDesignationcode}> 
            <option value="">Select a Designation</option>
            {designation.map((designation) => <option value={designation.value}>{designation.label}</option>)}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="formGridState">
          <Form.Label>CRED</Form.Label>
          <Form.Select onChange={handleCredcode}> 
            <option value="">Select a Cred</option>
            {cred.map((cred) => <option value={cred.value}>{cred.label}</option>)}
          </Form.Select>
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