import React, { useState } from 'react';
import Navbar from '../../Home/navbar/navbar';
import Footer from '../../Footer/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import './css/signup.css';

function Hospital() {
    const navigate = useNavigate();

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
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [id, setId] = useState('');
    const [contact, setContact] = useState('');
    const [contactb, setContactb] = useState('');

    const [validated, setValidated] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
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
    
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if(name !== '' && username !== '' && zip !== '' && address !== '' && contact !== '' && contactb !== '' && id !== '' && countrycode !== ''){
        navigate("/Hospital");
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
        <Card.Title>Register Hospital</Card.Title>
        </Card.Header>
        <br/>
        <Card.Text>
        <Form id="addDoctor" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label>Hospital Name</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="Hospital name"
            onChange={handleName}
            value={name}
            />
            <Form.Control.Feedback type="invalid">
                Please Enter the Name of the Hospital.
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
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" required
            onChange={handleAddress}
            value={address}
            />
            <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State/Union Territory</Form.Label>
            <Form.Select onChange={handleCountrycode}> 
            <option value="">Select a Country</option>
            {/* Mapping through each countr object in our country array
            and returning an option element with the appropriate attributes / values.
            */}
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
        <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Hospital Registration ID</Form.Label>
            <Form.Control type="text" placeholder="Registration ID" required
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
            <Form.Control type="tel" placeholder="XXXXXXXXXX" pattern="^\d{10}$" required
            onChange={handleContactb}
            value={contactb}
            />
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