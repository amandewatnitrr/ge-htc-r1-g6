import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Navbar from '../../Patient/NavigationBar/navbar';
import Footer from '../../Footer/footer';

function Prescription() {
    return (
      <>
      <Navbar />
      <div id='new'>
      <Table class="prescription-table" id="prescriptiontable" bordered striped hover responsive >
            <tbody>
              <tr>
                <th>Report Name</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Hospital</th>
                <th>View</th>
              </tr>
              <tr>
                <td>XXXXX</td>
                <td>XXXXXXXX</td>
                <td>DD-MM-YYYY</td>
                <td>XXXX Hospital</td>
                <td><Button variant="outline-success">Download</Button></td>
              </tr>
            </tbody>
          </Table>
      </div>
      <Footer />
      </>
    );
  }

  export default Prescription;