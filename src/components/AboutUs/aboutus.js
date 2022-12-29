import Navbar from '../Home/navbar/navbar';
import Footer from '../Footer/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../imgs/1647336360698.gif';
import gif2 from '../imgs/4b229396885b90ea126258e5d19370ec.gif';
import gif3 from '../imgs/c_hipertensao.gif';
import Card from 'react-bootstrap/Card';
import '../Home/css/home.css'
import pic1 from '../imgs/62e8f3d81329f4d3d4b3f7dc_StateofAutomationBlueHeader.png';

function AboutUs() {
  return (
        <div style={{'background': 'linear-gradient(#36D1DC, #5B86E5)' }}>
        <Navbar />
        <br/>
        <div id="home" style={{'min-height':'50vh'}}>
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
            <Footer />
            </div>


);
}

export default AboutUs;