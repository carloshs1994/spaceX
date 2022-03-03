import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './Rockets';
import { fetchRockets } from '../redux/rocketsReducer';

const RocketsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRockets(dispatch);
  }, []);

  const rocketsStore = useSelector((store) => Object.values(store.rocketsReducer.rockets));

  return (
    <div>
      {
        rocketsStore.map((rocket) => (
          <Rockets
            key={rocket.id}
            flickr_images={rocket.flickr_images}
            rocket_name={rocket.rocket_name}
            description={rocket.description}
          />
        ))
      }
    </div>
  );
};

export default RocketsContainer;
