import React from "react";
import {Navbar, Tabs,Tab} from 'react-bootstrap';
 import Product from "./manager_components/Product";
import Sales from "./manager_components/Sales";
import Purchase from "./manager_components/Purchase";
import Supply from "./manager_components/Supply";


function MdashBoard(){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Manager Dashboard</Navbar.Brand>
        </Navbar>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="Product" title="Product" enabled>
            <Product />
          </Tab>
          <Tab eventKey="Purchase" title="Purchase">
            <Purchase />
          </Tab>
          <Tab eventKey="Supplier" title="Supplier">
            <Supply />
          </Tab>
          <Tab eventKey="Sales" title="Sales">
            <Sales />
          </Tab>
        </Tabs>
      </div>
    );
}

export default  MdashBoard;