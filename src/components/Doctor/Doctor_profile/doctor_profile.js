import Card from 'react-bootstrap/Card';
import './css/doctor_profile.css'
import {FaBriefcaseMedical} from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import profile_pic from './imgs/unknown_user.jpg';

function profile_card() {
    return (
      <>
      <Card id="doctorcard" class="doctor-card">
        <Card.Header>
            <Card.Title><h4><FaBriefcaseMedical /> Doctor Details</h4></Card.Title>
        </Card.Header>
        <Card.Body>
        <img class="profile-pic" alt='profile-pic' src={profile_pic}></img>
          
          <Table id='doctorprofile' class="doctor-table" bordered striped hover >
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
                <th>Doctor ID</th>
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