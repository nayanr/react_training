import React from "react";
import {Tab,Nav,Row,Col} from "react-bootstrap";
import Minorc from "./minor_component";
function Supply(){
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Add Suppliers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Update Suppliers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">List Suppliers</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Minorc />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Minorc />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Minorc />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
}
export default Supply;


