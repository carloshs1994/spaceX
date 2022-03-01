import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { fetchData } from '../redux/missionsReducer';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const PrintMissions = ({ list }) => list.map((mission) => {
    const BadgeAndButton = () => {
      if (mission.reserved) {
        return (
          <>
            <td className="text-center">
              <Badge bg="info">Active Member</Badge>
            </td>
            <td className="text-center">
              <Button variant="outline-danger">Leave Mission</Button>
            </td>
          </>
        );
      }
      return (
        <>
          <td className="text-center">
            <Badge bg="secondary">NOT A MEMBER</Badge>
          </td>
          <td className="text-center">
            <Button variant="outline-secondary">Join Mission</Button>
          </td>
        </>
      );
    };

    return (
      <tr key={mission.id}>
        <th>{mission.name}</th>
        <td>{mission.description}</td>
        <BadgeAndButton />
      </tr>
    );
  });
  PrintMissions.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({ root: PropTypes.string })).isRequired,
  };

  useEffect(() => {
    if (missionsData.length === 0) dispatch(fetchData());
  }, []);

  return (
    <div className="col-11 mx-auto mt-4">
      <Table striped bordered hover size="sm" style={{ textAlign: 'left' }}>
        <thead>
          <tr>
            <th className="col-1">Missions</th>
            <th className="col-8">Description</th>
            <th className="col-1">Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <PrintMissions list={missionsData} />
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
