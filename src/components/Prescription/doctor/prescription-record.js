import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './css/prescription.css';
import Navbar from '../../Doctor/NavigationBar/navbar';
import Footer from '../../Footer/footer';
import '../../Doctor/NavigationBar/css/navbar.css';

function Prescription() {
    return (
      <>
      <Navbar />
      <div style={{'min-height':'50vh'}}>
      <Table class="prescription-table" id="prescriptiontable" bordered striped hover responsive >
            <tbody>
              <tr>
                <th>Patient ID</th>
                <th>Date</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Doctor ID</th>
                <th>Hospital</th>
                <th>View Details</th>
              </tr>
              <tr>
                <td>XXXXXXXX</td>
                <td>DD-MM-YYYY</td>
                <td>XX</td>
                <td>X</td>
                <td>XXXXXXXX</td>
                <td>XXXX Hospital</td>
                <td><Button variant="outline-primary">Details</Button></td>
              </tr>
            </tbody>
          </Table>
      </div>
      <Footer />
      </>
    );
  }

  export default Prescription;