import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar} from 'react-bootstrap';
import transparent_logo from '../../dummy_home/imgs/logo.png';
import './css/navbar.css'
import Button from 'react-bootstrap/Button';
import {FaBriefcaseMedical, FaSignOutAlt} from 'react-icons/fa';

import {
    Link,
  } from "react-router-dom";


const navbar = () => {
  return (
    
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
          <Nav.Link class="nav-item" href='../hospital'>
          <Link className='nav-link' to="/Hospital"><FaBriefcaseMedical /> Hospital</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../AddDoctors/add'>
          <Link className='nav-link' to="/Hospital/Add/Doctor"><FaBriefcaseMedical /> Add Doctor</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../AddPatients/add'>
          <Link className='nav-link' to="/Hospital/Add/Patient"><FaBriefcaseMedical /> Add Patient</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../ViewDoctors/view'>
          <Link className='nav-link' to="/Hospital/View/Doctor"><FaBriefcaseMedical /> View Doctor</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../ViewPatients/view'>
          <Link className='nav-link' to="/Hospital/View/Patient"><FaBriefcaseMedical /> View Patient</Link>
          </Nav.Link> 
        </Nav>
        <Nav class="signout">
          <Button variant="danger"><FaSignOutAlt /> Sign Out</Button>
        </Nav>
      </Navbar.Collapse> 
    </Navbar> 
  );  
}  
export default navbar;  