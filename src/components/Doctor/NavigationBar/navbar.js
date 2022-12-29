import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import transparent_logo from '../imgs/logo.png';
import './css/navbar.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserAlt, FaBriefcaseMedical, FaSignOutAlt, FaFileMedical, FaFilePrescription } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Doctor from "../doctor_app.js";

const navbar = () => {
  return (
    <>    
    <div class="sticky-top">
    <Navbar bg="dark" expand="md" variant="dark">   
      <Navbar.Brand>
      <Nav.Link class="nav-item" href='../../dummy_home/dummy_home.js'>
        <Link to ="/"><img alt="logo" class="navbarlogo" width="150 rem" src={transparent_logo} /></Link>
      </Nav.Link>
      </Navbar.Brand>    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link class="nav-item" href="../doctor_app.js">
            <Link className="nav-link" to="/Doctor">
              <FaUserAlt /> Profile
            </Link>
          </Nav.Link>
          <Nav.Link class="nav-item" href="../../Prescription/doctor/Prescription.js">
          <Link className="nav-link" to="/Doctor/Prescription">
            <FaFilePrescription /> Prescriptions
          </Link>
          </Nav.Link>  
        </Nav>
        <Nav class="signout">
          <Button variant="danger"><FaSignOutAlt /> Sign Out</Button>
        </Nav>
      </Navbar.Collapse> 
    </Navbar>
    </div>
    </> 
  );  
}  
export default navbar;  