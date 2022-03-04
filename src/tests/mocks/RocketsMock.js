/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const {
    id, rocket_name, description, flickr_images, reserved,
  } = props;

  return (
    <div key={id} className="d-flex flex-row my-4 mx-4">
      <div>
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <h5 className="mx-5">{rocket_name}</h5>
        <p className="text-start mx-5">
          <button className={reserved === true ? 'info' : 'bg-hide'}>{ reserved === true ? 'Reserved' : ''}</button>
          {description}
        </p>
        <button
          type="button"
          className={reserved === true ? 'btn btn-dark mx-5' : 'btn btn-primary mx-5'}
        >
          {reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rockets;
