import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Footer from '../../Footer/footer';
import './css/signin.css';
import Navbar from '../../Home/navbar/navbar';
import { useNavigate } from 'react-router-dom';

function SigninForm1() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if(email !== '' && password !== ''){
      navigate("/Hospital");
    }
    setValidated(true);
  };

  return (
    <>
    <div id="colour">
    <Navbar/>    
    <div id="new">
    <Card id='SigninCard'>
    <Card.Body>
    <Card.Header>
    <Card.Title>Sign In</Card.Title>
    </Card.Header>
    <br/>
    <Card.Text>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Hospital Email" onChange={handleEmail} value={email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password} />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Text>
    </Card.Body>
    </Card>
    </div>
    <Footer/>
    </div>
    </>
  );
}

export default SigninForm1;