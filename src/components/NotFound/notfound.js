import Navbar from '../dummy_home/navbar/navbar';
import Footer from '../Footer/footer';
import './css/notfound.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Notfound() {

  const [departmentId, setDepartmentId] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [posts, setPosts] = useState([]);

  const handleDepartmentId = (e) => {
    setDepartmentId(e.target.value);
    console.log(e.target.value)
};

const handleDepartmentName = (e) => {
  setDepartmentName(e.target.value);
  console.log(e.target.value)
};

  const handleSubmit = (e) => {
     e.preventDefault();
     addPosts(departmentId, departmentName);
  };

  const addPosts = (departmentId, departmentName) => {
     axios
        .post('http://127.0.0.1:8000/department', {
           departmentId: departmentId,
           departmentName: departmentName,
        })
        .then((response) => {
           setPosts([response.data, ...posts]);
        });
     setDepartmentId('');
     setDepartmentName('');
  };

    return (
      <>
        <Navbar />
        {/* <div style={{'min-height':'50vh'}}>
        <center>
        <div title="404">
        <section class="page_404">
            <div class="container">
                <div class="row"> 
                <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
                
                
                </div>
                
                <div class="contant_box_404">
                <h3 class="h2">
                Look like you're lost
                </h3>
                
                <p>the page you are looking for is not available!</p>
                
                <a href="../dummy_home/dummy_home.js"><Button variant="outline-primary">Go to Home</Button></a>
            </div>
                </div>
                </div>
                </div>
            </div>
        </section>
        </div>
        </center>
        </div> */}

        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Add Id</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={handleDepartmentId}
            value={departmentId}
          />
          </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Add Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={handleDepartmentName}
            value={departmentName}
          />
        </Form.Group>
        </Row>
        </Form>

        <Footer />
      </>
      );
    }
export default Notfound;