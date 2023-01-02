import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar} from 'react-bootstrap';
import transparent_logo from '../imgs/logo.png';
import '../../Doctor/NavigationBar/css/navbar.css';
import Button from 'react-bootstrap/Button';
import {FaHome, FaSignInAlt} from 'react-icons/fa';
import { FcAbout } from "react-icons/fc";
import {
    Link,
  } from "react-router-dom";


const navbar = () => {
  return (
    <div class="sticky-top">
    <Navbar bg="dark" expand="md" variant="dark">   
      <Navbar.Brand>
      <Nav.Link class="nav-item" href='../dummy_home.js'>
        <Link className='nav-link' to ="/">
        <img alt="logo" class="navbarlogo" width="150 rem" src={transparent_logo} />
        </Link>
      </Nav.Link>
      </Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link class="nav-item" href='../../Home/'>
          <Link className='nav-link' to="/Home"><FaHome /> Home</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='#AboutUs'>
          <Link className='nav-link' to="/AboutUs"><FcAbout />About Us</Link>
          </Nav.Link> 
        </Nav>
        <Nav>
        <Nav.Link class="nav-item" href='../../Signin/doctor_patient/signin.js'>
        <Link className='nav-link' to="/Signin/Doctor_or_Patient"><Button id="signinbuttonnavbar" variant="success"><FaSignInAlt /> Sign In (Patient/Doctor)</Button></Link>
        </Nav.Link>
        <Nav.Link class="nav-item" href='../../Signin/hospital/signin.js'>
        <Link className='nav-link' to="/Signin/Hospital"><Button id="signinbuttonnavbar" variant="success"><FaSignInAlt /> Sign In (Hospital)</Button></Link>
        </Nav.Link>
        <Nav.Link class="nav-item" href='../../Signin/Signup/signup.js'>
        <Link className='nav-link' to="/Signup/Hospital"><Button id="signinbuttonnavbar" variant="success"><FaSignInAlt /> Register (Hospital)</Button></Link>
        </Nav.Link>
        </Nav>
      </Navbar.Collapse> 
    </Navbar> 
    </div>
  );  
}  
export default navbar;  