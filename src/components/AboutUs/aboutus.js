import Navbar from '../Home/navbar/navbar';
import Footer from '../Footer/footer.js';
import Carousel from 'react-bootstrap/Carousel';
import gif1 from '../imgs/1647336360698.gif';
import gif2 from '../imgs/4b229396885b90ea126258e5d19370ec.gif';
import gif3 from '../imgs/c_hipertensao.gif';
import Card from 'react-bootstrap/Card';
import '../Home/css/home.css'
import pic1 from '../imgs/62e8f3d81329f4d3d4b3f7dc_StateofAutomationBlueHeader.png';
import './css/aboutus.css';
import profilepic1 from '../imgs/aman.png'
import profilepic2 from '../imgs/takchhya.png';
import profilepic3 from '../imgs/gagan.png';
import profilepic4 from '../imgs/aditya.png';

function AboutUs() {
  return (
        <div style={{'background': 'linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )' }}>
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

            <br/>
            <br/>
            <center><h1><b><span id="title-our">Our</span> <span id="title-team">Team</span></b></h1></center>
            <br/>

            <div id="row">
                <ul class="list-members">
                    <li class="member">
                        <div class="member-image">
                        <img src={profilepic3}/>
                        </div>
                        <div class="member-info">
                        <h5 id="team-mem-name">N.Gagan</h5>
                        <p>Backend Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={profilepic1}/>
                        </div>
                        <div class="member-info">
                        <h5 id="team-mem-name">Aman Kumar Dewangan</h5>
                        <p>Designer and Frontend Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={profilepic2}/>
                        </div>
                        <div class="member-info">
                        <h5 id="team-mem-name">Takchhya Kumari</h5>
                        <p>Frontend Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                    <li class="member">
                        <div class="member-image">
                        <img src={profilepic4}/>
                        </div>
                        <div class="member-info">
                        <h5 id="team-mem-name">Aditya Chourasia</h5>
                        <p>Backend Developer</p>
                        <div class="social-link">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        </div>
                    </li>
                </ul>


            </div>       

            </div>

            <Footer />
            </div>


);
}

export default AboutUs;