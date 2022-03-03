import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from './Rockets';
import { fetchRockets } from '../redux/rocketsReducer';

const RocketsContainer = () => {
  const dispatch = useDispatch();
  const rocketsStore = useSelector((store) => store.rocketsReducer.rockets);

  useEffect(() => {
    if (!rocketsStore.length) {
      fetchRockets(dispatch);
    }
  }, []);

  return (
    <div>
      {
        rocketsStore.map((rocket) => (
          <Rockets
            key={rocket.id}
            id={rocket.id}
            flickr_images={rocket.flickr_images}
            rocket_name={rocket.rocket_name}
            description={rocket.description}
            reserved={rocket.reserved}
          />
        ))
      }
    </div>
  );
};

export default RocketsContainer;
