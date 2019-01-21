import React, { Component } from 'react';
import {Form, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component {
  render() {
    return (
        <div>
            <Form>
                <Row>
                    <Col>One</Col>
                    <Col>Two</Col>
                </Row>
            </Form>
        </div>
    );
  }
}

export default Menu;
