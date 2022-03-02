import React from 'react';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const { id, flickr_images, rocket_name, description } = props

  return (
    <div key={id} className="d-flex flex-row justify-content-center">
      <div>
        <img src={flickr_images} alt="flickr_images" className="rockets-images" />
      </div>
      <div>
        <h5 className="pr-5">{rocket_name}</h5>
        <p className="px-5">{description}</p>
      </div>
    </div>
  )
};

Rockets.propTypes = {
  id: PropTypes.string.isRequired,
  rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickr_images: PropTypes.string.isRequired,
};

export default Rockets;
