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
import { useForm } from "react-hook-form";
import './css/signup.css';
import {
    Link,
  } from "react-router-dom";

function Hospital() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo(0,0);
      }

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [id, setId] = useState('');
    const [contact, setContact] = useState('');
    const [contactb, setContactb] = useState('');
    const [code, setCode] = useState('');

    const [validated, setValidated] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleZip = (e) => {
        setZip(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleId = (e) => {
        setId(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };
    
    const handleContact = (e) => {
        setContact(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleContactb = (e) => {
        setContactb(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };

    const handleCode = (e) => {
        setCode(e.target.value);
        //setSubmitted(false);
        console.log(e.target.value)
    };
    
    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if(name !== '' && username !== '' && zip !== '' && address !== '' && contact !== '' && contactb !== '' && id !== ''){
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
            <Form.Select defaultValue="Choose State/Union Territory" required>
            <Form.Control required as="select" type="select" 
            onChange={handleCode}
            value={code} 
            ></Form.Control>
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