import React from 'react';
import './ToursDetails.scss';

export default ({ tour }) => {
  const { price, rating } = tour;
  const ratings = rating > 1 ? 'ratings' : 'rating';
  return (
    <div className="tour-details">
      <div className="tour-details-flex">
        <div className="tour-details-items">
          <div>
            <span>
              <b>{`$${price}`}</b>
            </span>{' '}
            <span>per person</span>
          </div>
          <div>
            <span>
              <b>{`${rating}`}</b>
            </span>{' '}
            <span>{ratings}</span>
          </div>
        </div>
        <div className="btn-container">
          <a href="#" className="btn btn-white">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
