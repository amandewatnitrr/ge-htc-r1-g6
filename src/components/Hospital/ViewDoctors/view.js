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
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Hospital</th>
                <th>View Details</th> 
              </tr>
              <tr>
                <td>XXXXXXXX</td>
                <td>XXX</td>
                <td>XX</td>
                <td>XXXX Hospital</td>
                <td>
                <Link to='/Doctor'><Button variant="outline-primary">Details</Button></Link>         
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