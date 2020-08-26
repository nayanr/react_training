import React from "react";
import {Navbar, Tabs,Tab} from 'react-bootstrap';
import AddEmployee from "./admin/add_employee";
import UpdateEmployee from "./admin/update_employee";


function AdashBoard(){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        </Navbar>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="add employee" title="Add Employee">
            <AddEmployee />
          </Tab>
          <Tab eventKey="update employee" title="Update Employee">
            <UpdateEmployee />
          </Tab>
        </Tabs>
        <h6>Use Tabs For Adding and Updating Employees</h6>
      </div>
    );
}

export default  AdashBoard;