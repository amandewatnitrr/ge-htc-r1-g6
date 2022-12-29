import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar} from 'react-bootstrap';
import transparent_logo from '../imgs/logo.png';
import './css/navbar.css'
import Button from 'react-bootstrap/Button';
import {FaBriefcaseMedical,FaSignInAlt} from 'react-icons/fa';
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
          <Nav.Link class="nav-item" href='../../Home/home.js'>
          <Link className='nav-link' to="/Home"><FaBriefcaseMedical /> Home</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../../Home/home.js'>
          <Link className='nav-link' to="/Hospital"><FaBriefcaseMedical /> Hospital</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../../Doctor/doctor_app.js'>
          <Link className='nav-link' to="/Doctor"><FaBriefcaseMedical /> Doctor App</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../../Patient/patient_app.js'>
          <Link className='nav-link' to="/Patient"><FaBriefcaseMedical /> Patient App</Link>
          </Nav.Link> 
        </Nav>
        <Nav>
          <Nav.Link class="nav-item" href='../../Signin/doctor_patient/signin.js'>
          <Link className='nav-link' to="/Signin/Doctor_or_Patient"><Button id="signinbuttonnavbar" variant="success"><FaSignInAlt /> Sign In(Patient/Doctor)</Button></Link>
          </Nav.Link>
          <Nav.Link class="nav-item" href='../../Signin/hospital/signin.js'>
          <Link className='nav-link' to="/Signin/Hospital"><Button id="signinbuttonnavbar" variant="success"><FaSignInAlt /> Sign In(Hospital)</Button></Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse> 
    </Navbar> 
    </div>
  );  
}  
export default navbar;  