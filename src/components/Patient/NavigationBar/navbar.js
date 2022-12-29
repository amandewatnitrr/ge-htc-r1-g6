import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import transparent_logo from '../imgs/logo.png';
import './css/navbar.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaUserAlt, FaBriefcaseMedical, FaSignOutAlt, FaFileMedical, FaNotesMedical, FaFilePrescription } from 'react-icons/fa';
import {TbReportMedical} from 'react-icons/tb';
import dummy from '../../dummy_home/dummy_home';
import report from '../MedicalReport/report'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link,
} from "react-router-dom";


const navbar = () => {
  return (
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
          <Nav.Link class="nav-item" href="../patient_app.js">
            <Link className="nav-link" to="/Patient">
            <FaUserAlt /> Profile
            </Link>
          </Nav.Link>
          <Nav.Link class="nav-item" href="../Prescription/prescription">
            <Link className="nav-link" to="/Patient/Prescription">
            <FaFilePrescription /> Prescriptions
            </Link>
          </Nav.Link>  
          <Nav.Link class="nav-item" href="../MedicalReport/report">
            <Link className="nav-link" to="/Patient/Report">
            <TbReportMedical /> Medical Reports
            </Link>
          </Nav.Link> 
        </Nav>
        <Nav class="signout">
          <Button variant="danger"><FaSignOutAlt /> Sign Out</Button>
        </Nav>
      </Navbar.Collapse> 
    </Navbar> 
    </div>
  );  
}  
export default navbar;  