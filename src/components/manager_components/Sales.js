import React from "react";
import {Tab,Nav,Row,Col} from "react-bootstrap";
import Minorc from "./minor_component";
function Sales(){
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Salea By SalesPerson</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Month-wise sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Weekly sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Product-wise Sales</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Monthly Sales</Nav.Link>
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
                <Tab.Pane eventKey="fourth">
                  <Minorc />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Minorc />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
}
export default Sales;


