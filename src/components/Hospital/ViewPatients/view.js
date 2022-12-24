import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../../Footer/footer';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './css/view.css';
import {
  Link,
} from "react-router-dom";

function hospital() {
  return (
    <>
        <Navbar />
        <div id='new'>
        <Table class="prescription-table" id="prescriptiontable" bordered striped hover responsive >
            <tbody>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Hospital</th>
                <th>Add Prescription</th>
                <th>Add Medical report</th>
                <th>View Details</th>
              </tr>
              <tr>
                <td>XXXXXXXX</td>
                <td>XXX</td>
                <td>XXXX Hospital</td>
                <td><Button variant="outline-success">Add Prescription</Button></td>
                <td><Button variant="outline-success">Add Report</Button></td>
                <td>
                <Link to='/Patient'><Button variant="outline-primary">Details</Button></Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
    </>
  )
}

export default hospital;