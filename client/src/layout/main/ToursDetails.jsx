import React, { useState, Fragment } from 'react';
import Modal from '../../components/Modal';
import './ToursDetails.scss';

export default ({ tour }) => {
  const [details, setDetails] = useState(false);
  const { price, rating, about } = tour;
  const ratings = rating > 1 ? 'ratings' : 'rating';
  const handleClick = () => {
    setDetails(!details);
  };
  return (
    <Fragment>
      <div className="tour-details">
        <div className="tour-details-flex">
          <div className="tour-details-items">
            <div>
              <b>{`$${price}`}</b> per person
            </div>
            <div>
              <b>{`${rating}`}</b> {ratings}
            </div>
          </div>
          <div className="btn-container">
            <button onClick={handleClick} className="btn">
              Details
            </button>
          </div>
        </div>
      </div>
      {details && <Modal about={about} handleClick={handleClick} />}
    </Fragment>
  );
};
