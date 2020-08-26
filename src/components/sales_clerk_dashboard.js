import React from "react";
import {Navbar, Tabs,Tab} from 'react-bootstrap';
import Sonnet from "./sonnet.js";


function SdashBoard(){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        </Navbar>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="add item" title="Add Item">
            <Sonnet />
          </Tab>
          <Tab eventKey="update item" title="Update Item">
            <Sonnet />
          </Tab>
          <Tab eventKey="delete item" title="Delete Item">
            <Sonnet />
          </Tab>
          <Tab eventKey="generate bill" title="Generate Bill">
            <Sonnet />
          </Tab>
        </Tabs>
      </div>
    );
}

export default  SdashBoard;