import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Footer from '../../Footer/footer';
import './css/signin.css';
import Navbar from '../../Home/navbar/navbar';

function SigninForm1() {
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
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check if Patient" />
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