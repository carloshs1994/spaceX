import React from 'react';
import {
  Col,
  Container,
  Row,
  Table,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const MyProfile = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const myMissions = missionsData.filter((mission) => mission.reserved);

  const Missions = ({ list }) => list.map((mission) => (
    <tr key={mission.id}>
      <td>
        <p className="ms-2">{mission.name}</p>
      </td>
    </tr>
  ));

  Missions.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({ root: PropTypes.string })).isRequired,
  };

  return (
    <Container style={{ textAlign: 'left' }}>
      <Row>
        <Col className="d-flex flex-column align-items-left mt-4">
          <h1>My Missions</h1>
          <Table bordered hover>
            <tbody>
              <Missions list={myMissions} />
            </tbody>
          </Table>
        </Col>
        <Col className="d-flex flex-column align-items-left mt-4">
          <h1>My Rockets</h1>
          <Table bordered hover>
            <tbody>
              <tr>
                <td>
                  <p className="ms-2">1</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
