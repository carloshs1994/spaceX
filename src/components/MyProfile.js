import React from 'react';
import {
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';

const MyProfile = () => (
  <Container style={{ textAlign: 'left' }}>
    <Row>
      <Col className="d-flex flex-column align-items-left mt-4">
        <h1>My Missions</h1>
        <Table bordered hover>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col className="d-flex flex-column align-items-left mt-4">
        <h1>My Rockets</h1>
        <Table bordered hover>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default MyProfile;
