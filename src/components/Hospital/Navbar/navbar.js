import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar} from 'react-bootstrap';
import transparent_logo from '../../dummy_home/imgs/logo.png';
import './css/navbar.css'
import Button from 'react-bootstrap/Button';
import {FaSignOutAlt, FaHospitalAlt} from 'react-icons/fa';
import {HiUserAdd} from 'react-icons/hi';
import {MdOutlineViewList} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import {
    Link,
  } from "react-router-dom";


const Navigationbar = () => {

  const navigate = useNavigate();

  const logout = (e) => {
    localStorage.removeItem('token-info');
    navigate("/Home");
  };
  
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
          <Nav.Link class="nav-item" href='../hospital'>
          <Link className='nav-link' to="/Hospital"><FaHospitalAlt /> Hospital</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../AddDoctors/add'>
          <Link className='nav-link' to="/Hospital/Add/Doctor"><HiUserAdd /> Add Doctor</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../AddPatients/add'>
          <Link className='nav-link' to="/Hospital/Add/Patient"><HiUserAdd /> Add Patient</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../ViewDoctors/view'>
          <Link className='nav-link' to="/Hospital/View/Doctor"><MdOutlineViewList /> View Doctor</Link>
          </Nav.Link> 
          <Nav.Link class="nav-item" href='../ViewPatients/view'>
          <Link className='nav-link' to="/Hospital/View/Patient"><MdOutlineViewList /> View Patient</Link>
          </Nav.Link> 
        </Nav>
        <Nav class="signout">
          <Button variant="danger" onClick={logout}><FaSignOutAlt /> Sign Out</Button>
        </Nav>
      </Navbar.Collapse> 
    </Navbar> 
    </div>
  );  
}  
export default Navigationbar;  