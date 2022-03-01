import Rockets from './Rockets';

const RocketsContainer = () => {

  const rockets = [
    {
      id: 1,
      rocket_name: "first mission",
      description: "moon",
      status: false,
    },
    {
      id: 2,
      rocket_name: "second mission",
      description: "mars",
      status: true,
    },
  ];

  return (
    <div>
      {
        rockets.map((rocket)=>(
          <Rockets 
          key={rocket.id}
          rocket_name ={rocket.rocket_name}
          description = {rocket.description}
          />
        ))
      }
    </div>
  )
}

export default RocketsContainer; 