import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { fetchData, changeReservedStatus } from '../redux/missionsReducer';

const Missions = () => {
  const missionsData = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();

  const changeStatus = (event) => {
    dispatch(changeReservedStatus(event.target.id));
  };

  const PrintMissions = ({ list }) => list.map((mission) => {
    const Buttons = () => {
      if (mission.reserved) {
        return (
          <td className="text-center">
            <Button onClick={changeStatus} id={mission.id} variant="outline-danger">Leave Mission</Button>
          </td>
        );
      }
      return (
        <td className="text-center">
          <Button onClick={changeStatus} id={mission.id} variant="outline-secondary">Join Mission</Button>
        </td>
      );
    };

    return (
      <tr key={mission.id}>
        <th>{mission.name}</th>
        <td>{mission.description}</td>
        <td className="text-center">
          {mission.reserved && <Badge bg="info">Active Member</Badge>}
          {mission.reserved === false && <Badge bg="secondary">NOT A MEMBER</Badge>}
        </td>
        <Buttons />
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
