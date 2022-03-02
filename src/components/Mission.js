import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeReservedStatus } from '../redux/missionsReducer';

const PrintMissions = ({ list }) => list.map((mission) => {
  const dispatch = useDispatch();

  const changeStatus = (event) => {
    dispatch(changeReservedStatus(event.target.id));
  };

  const Buttons = () => {
    if (mission.reserved) {
      return (
        <td id="container" className="text-center">
          <Button onClick={changeStatus} id={mission.id} variant="outline-danger">Leave Mission</Button>
        </td>
      );
    }
    return (
      <td id="container" className="text-center">
        <Button onClick={changeStatus} id={mission.id} variant="outline-secondary">Join Mission</Button>
      </td>
    );
  };

  return (
    <tr key={mission.id}>
      <th>{mission.name}</th>
      <td>{mission.description}</td>
      <td id="container" className="text-center">
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

export default PrintMissions;
