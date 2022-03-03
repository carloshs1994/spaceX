/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReserved, setCancelation } from '../redux/rocketsReducer';

const Rockets = (props) => {
  const { id, flickr_images, rocket_name, description, reserved, } = props

  const dispatch = useDispatch();

  const newReservation = () => {
    dispatch(setReserved(id));
  };

  const cancelReservation = () => {
    dispatch(setCancelation(id));
  };

  return (
    <div key={id} className="d-flex flex-row my-3">
      <div>
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div className="">
        <h5 className="">{rocket_name}</h5>
        <div className="d-flex flex-row">
          <button className={reserved === true ? 'btn btn-primary btn-sm' : 'btn btn-hide'}>{ reserved === true ? 'Reserved' : ''}</button>
          <p className="px-5">{description}</p>
        </div>
        <button 
          type="button" 
          className={reserved === true ? 'btn btn-dark' : 'btn btn-primary'}
          onClick={reserved === true ? cancelReservation : newReservation}
          >
            {reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>

    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.number.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rockets;
