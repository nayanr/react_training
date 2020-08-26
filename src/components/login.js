import React from "react";
import {Form, Button,Navbar} from 'react-bootstrap';
function LoginForm(){
    return (
      <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Login</Navbar.Brand>
        </Navbar>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />

          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}



export default LoginForm;