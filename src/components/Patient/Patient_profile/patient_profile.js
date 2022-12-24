import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import './css/patient_profile.css'
import { FaUserShield,FaUserAlt, FaBriefcaseMedical, FaSignOutAlt } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import {Container} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import profile_pic from './imgs/unknown_user.jpg';

function profile_card() {
    return (
      <>
      <Card class="patient-card">
        <Card.Header>
            <Card.Title><h4><FaBriefcaseMedical /> Patient Details</h4></Card.Title>
        </Card.Header>
        <Card.Body>
        <img class="profile-pic" src={profile_pic}></img>
          
          <Table class="doctor-table" bordered striped hover >
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>Aman Kumar Dewangan</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>21</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>Male</td>
              </tr>
              <tr>
                <th>Patient Id</th>
                <td>XXXXXXXXXX</td>
              </tr>
              <tr>
                <th>Hospital</th>
                <td>XXXXXXXXXX</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      </>
    );
  }

  export default profile_card;