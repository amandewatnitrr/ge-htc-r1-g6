import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Navbar from '../../Patient/NavigationBar/navbar';
import Footer from '../../Footer/footer';

function Prescription() {
    return (
      <>
      <div id="colour">
      <Navbar />
      <br />
      <div id='new'>
      <Card>
        <Table class="prescription-table" size="sm" id="prescriptiontable" bordered striped hover responsive >
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
              <td><Button variant="outline-success" size="sm">Download</Button></td>
            </tr>
          </tbody>
        </Table>
      </Card>
      </div>
      <Footer />
      </div>
      </>
    );
  }

  export default Prescription;