import React from 'react';
import {
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';
import RocketsProfile from './RocketsProfile';

const MyProfile = () => {
  
  return (
    <Container style={{ textAlign: 'left' }}>
      <Row>
        <Col className="d-flex flex-column align-items-left mt-4">
          <h1>My Missions</h1>
          <Table bordered hover>
            <tbody>
            </tbody>
          </Table>
        </Col>
        <Col className="d-flex flex-column align-items-left mt-4">
          <h1>My Rockets</h1>
          <Table bordered hover>
              <RocketsProfile />
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
