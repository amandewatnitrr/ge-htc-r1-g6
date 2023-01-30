import React from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../../Footer/footer';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from "axios";
import './css/view.css';
import {
  Link,
} from "react-router-dom";

function Hospital() {
  const[employees, setEmployees] = useState([]);
    useEffect(()=>{
      axios
        .get('http://127.0.0.1:8000/employee')
        .then((response)=>{
          setEmployees(response.data)
          console.log(response.data)
        })
    },[])
  return (
    <>
      <div style={{'background':' linear-gradient(grey,lightblue,grey)'}}>
      <Navbar />
      <br />
        <div id='new'>
        <Card>
          <Table class="prescription-table" size="sm" id="prescriptiontable" bordered striped hover responsive >
            <tbody>
              <tr>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Hospital</th>
                <th>Date of Joining</th>
                <th>View Details</th> 
              </tr>
              {employees.map((employee)=>{
                <tr key={employee.EmployeeId}>
                <td>{employee.EmployeeId}</td>
                <td>{employee.EmployeeName}</td>
                <td>{employee.Department}</td>
                <td>XXXX Hospital</td>
                <td>{employee.DateOfJoining}</td>
                <td>
                <Link to='/Doctor'><Button variant="outline-primary" size="sm">Details</Button></Link>         
                </td>     
                </tr>
              })}
            </tbody>
          </Table>
        </Card>
        </div>
      <Footer />
      </div>
    </>
  )
}

export default Hospital;
