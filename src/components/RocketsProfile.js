import { useSelector } from "react-redux";

const RocketsProfile = () => {
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);
  const reservedRockets = rocketsStore.filter((rocket) => rocket.reserved === true);
  
  return (
    <tbody>
      {reservedRockets.map((rockets) => (
        <tr key={rockets.id}>
          <td>
            <p className="ms-2">{rockets.rocket_name}</p>
          </td>
        </tr>
    ))}
  </tbody>
);
}

export default RocketsProfile;