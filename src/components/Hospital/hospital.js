import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from '../Footer/footer';
import "./css/hospital.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import pic1 from './imgs/pic1.jfif';
import pic from './imgs/pic.jfif';
import doc1 from './imgs/doc1.jfif';
import doc2 from './imgs/doc2.jfif';
import pat1 from './imgs/pat1.jfif';
import pat2 from './imgs/pat2.jfif';
import gif1 from './imgs/hospital1.gif';
import {
  Link,
} from "react-router-dom";


function hospital() {
  const handleClick = () => {
    window.scrollTo(0,0);
  }
  return (
    <>
      <div style={{'background':' linear-gradient(grey,lightblue,grey)'}}>
        <Navbar />
        <br />
        <div id="new">
        <center>
          <Card id="home-carousel-card" bg='dark'>
            <Carousel id="carouselhome">
              <Carousel.Item interval={2000}>
                <center><img
                id="carousel-item-hospital"
                className="d-block w-75"
                src={pic}
                alt="Hospital"
                height="600"
                /></center>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <center><img
                id="carousel-item-hospital"
                className="d-block w-75"
                src={pic1}
                alt="Iot"
                height="600"
                /></center>
              </Carousel.Item>
            </Carousel>
          </Card>
          </center>
          <br />
          <CardGroup>
            <Card bg="secondary" text="light" className="mb-4 text-center">
              <Card.Img height="300" variant="top" src={doc1} />
              <Card.Body>
                <Card.Title>Add Doctor</Card.Title>
                <Card.Text>
                  <em>Register a new doctor to the Hospital.</em>
                </Card.Text>
                <Link to="/Hospital/Add/Doctor" style={{'text-decoration': "none"}} onClick={handleClick}>
                  <div className="d-grid gap-2"><Button variant="dark">Add Doctor</Button></div>
                </Link>
              </Card.Body>
            </Card>
            <Card bg="secondary" text="light" className="mb-4 text-center">
              <Card.Img height="300" variant="top" src={doc2} />
              <Card.Body>
                <Card.Title>View Doctors</Card.Title>
                <Card.Text>
                  <em>View a list of all the doctors currently working with our hospital.</em>
                </Card.Text>
                <Link to="/Hospital/View/Doctor" style={{'text-decoration': "none"}} onClick={handleClick}>
                  <div className="d-grid gap-2"><Button variant="dark">View Doctors</Button></div>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card bg="secondary" text="light" className="mb-4 text-center">
              <Card.Img height="300"  variant="top" src={pat1} />
              <Card.Body>
                <Card.Title>Add Patient</Card.Title>
                <Card.Text>
                  <em>Register a new patient to the Hospital</em>
                </Card.Text>
                <Link to="/Hospital/Add/Patient" style={{'text-decoration': "none"}} onClick={handleClick}>
                  <div className="d-grid gap-2"><Button variant="dark">Add Patient</Button></div>
                </Link>
              </Card.Body>
            </Card>
            <Card bg="secondary" text="light" className="mb-4 text-center">
            <Card.Img height="300"  variant="top" src={pat2} />
              <Card.Body>
                <Card.Title>View Patients</Card.Title>
                <Card.Text>
                  <em>View a list of all the patients that are being treated at our hospital.</em>
                </Card.Text>
                <Link to="/Hospital/View/Patient" style={{'text-decoration': "none"}} onClick={handleClick}>
                  <div className="d-grid gap-2"><Button variant="dark">View Patients</Button></div>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <br />
        <Footer />
      </div>
    </>
  )
}

export default hospital;