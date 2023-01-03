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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function AddReport() {

  const [validated, setValidated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
        <div style={{'background':' linear-gradient(grey,lightblue,grey)'}}>
        <Navbar />
        <div id="new">
        <Card id='SignOutCard'>
        <Card.Body>
        <Card.Header>
        <Card.Title>Add Medical Report</Card.Title>
        </Card.Header>
        <br/>
        <Card.Text>
        <Form id="addDoctor" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Doctor ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Doctor ID"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Doctor ID.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Patient ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Patient ID"
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Patient ID.
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Operator ID</Form.Label>
          <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">Operator:</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Operator's ID"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter your Operator ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <br />
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <Form.Label>Upload Medical Report</Form.Label>
            {selectedImage && (
            <div>
            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
            </div>
            )}
        <br /> 
        <input
            type="file"
            name="myImage"
            onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
            }}
        />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <Form.Label>Conclusion</Form.Label>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Enter Conclusion</p>"
            onReady={ ( editor ) => {
            console.log( "CKEditor5 React Component is ready to use!", editor );
            } }
            onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
            } }
        />
        {/*<Form.Control as="textarea" rows={3} />*/}
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
        <br/>
        </div>
        <Footer />
        </div>
    </>
  )
}

export default AddReport;