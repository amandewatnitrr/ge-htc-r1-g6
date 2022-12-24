import Navbar from './navbar/navbar';
import Footer from '../Footer/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../imgs/1647336360698.gif';
import gif2 from '../imgs/4b229396885b90ea126258e5d19370ec.gif';
import gif3 from '../imgs/c_hipertensao.gif';
import Card from 'react-bootstrap/Card';
import './css/home.css'

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

    
      {
      /**
        * @Takchhya - These are the cards, do me a favour, just make sure when they are in desktop view, it's 2 cards on 1 row,
        * while in mobile view, it's 1 card in 1 row. Work on it and make sure it's resolved.
       **/

      /* 
      */
      
      }
    <center>
    <div id="row">
    <div id="column">
    <Card id="homeservicefor">
        <Card.Header><Card.Title><center>For Patients</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div id="column">
      <Card id="homeservicefor"> 
        <Card.Header><Card.Title><center>For Hospitals</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div id="column">
      <Card id="homeservicefor"> 
        <Card.Header><Card.Title><center>For Doctors</center></Card.Title></Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>
    </center>
    </div>
    <br/>
    <Footer />
    </div>
    </>
  );
}

export default doctor_app;
