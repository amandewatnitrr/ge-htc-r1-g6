import Navbar from './navbar/navbar';
import Footer from '../Footer/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../imgs/1647336360698.gif';
import gif2 from '../imgs/4b229396885b90ea126258e5d19370ec.gif';
import gif3 from '../imgs/c_hipertensao.gif';
import Card from 'react-bootstrap/Card';
import './css/home.css'
import pic1 from '../imgs/62e8f3d81329f4d3d4b3f7dc_StateofAutomationBlueHeader.png';

function doctor_app() {
  return (
    <>
    <div style={{'background': 'linear-gradient(#36D1DC, #5B86E5)' }}>
    <Navbar />
    <br/>
    <div id="home" style={{'min-height':'50vh'}}>

    <center>
    <Card id="home-carousel-card" bg='dark'>
    <Carousel id="carouselhome">
      <Carousel.Item>
        <center><img
          id="carousel-item"
          src={gif1}
          alt="IoT in Medical"
        /></center>
        <Carousel.Caption>
          <h3 style={{color:'black'}}><b>EMR & EHR</b></h3>
          <p style={{color:'black'}}><b>One Step Solution to Well Maintained Medical Record Management</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center><img
          id="carousel-item"
          src={gif2}
          alt="Real-Time Medical Record Support - Anytime, Anywhere"
        /></center>
      </Carousel.Item>
      <Carousel.Item>
        <center><img
          id="carousel-item"
          src={gif3}
          alt="All Documents and Prescription in One Touch"
        /></center>

        <Carousel.Caption >
          <h3 style={{color:'black'}}><b>All Documents and Prescription at One Touch</b></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Card>
    </center>
    <br/>
    <center>
    <div id="row">
    <div id="column">
    <Card bg="dark" id="homeservicefor">
        <Card.Header><Card.Title><center>For Patients</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text style={{'text-align':'left'}}>
            <ul>
              <li>Should be able to securely access their patient profile</li>
              <li>Should be able to view all the digital prescriptions based on their visit to the hospitals</li>
              <li>Should be able to view their medical test reports</li>
              <li>Should be able to view their hospital visit history in a graphical view</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div id="column">
      <Card bg="dark" id="homeservicefor"> 
        <Card.Header><Card.Title><center>For Hospitals</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text style={{'text-align':'left'}}>
            <ul>
              <li>Should be able to onboard new doctor/provider into the EHS system</li>
              <li>Should be able to onboard new patients into the EHR system</li>
              <li>Should be able to view all the patients onboarded</li>
              <li>Should be able to view all the doctors/providers onboarded</li>
              <li>Should be able to create digital prescriptions with patient and the doctor details</li>
              <li>Should be able to upload medical test reports for a particular patient</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div id="column">
      <Card bg="dark" id="homeservicefor" style={{'text-align':'left'}}> 
        <Card.Header><Card.Title><center>For Doctors</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
          <li>Should be able to securely access their work profile</li>
          <li>Should be able to view all the digital prescriptions written by him/her</li>
          <li>Should be able to view their consultation history in a graphical view</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
    </center>
    <br/>

    <div id="row">
      <div id="column">
        <img id="homeimage1" alt="homeimage1" src={pic1} />
      </div>

      <div id="column">
        <Card id="servicedetails">
          <Card.Header id="AboutUs">
            <h3><b>About Us</b></h3>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{'text-align': 'justify'}}>
            <b>
            For 40 years, we’ve worked at the intersection of healthcare and information technology to connect people and systems 
            around the world. We use the latest technology to create solutions that let communities and people engage in their own 
            health. Whether they are supporting the clinical, financial or operational areas of a hospital or health system, our 
            tools are designed to work for today and think for tomorrow. 
            <br/><br/><br/>
            
            <p>We support our clients by surfacing data that enables them 
            to make informed decisions for better management of operations, while arming their clinicians with the information they
            need to provide smarter care. Empowering them to know, manage and engage with the people they serve. All to disrupt the 
            industry and transform the way healthcare is delivered. It’s our mission to relentlessly seek breakthrough innovation that 
            will shape healthcare of tomorrow.
            </p>
            </b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>

    </div>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default doctor_app;
