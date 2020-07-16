import React from 'react';
import './Modal.scss';

export default ({ about, handleClick }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content-left">
          <img
            src="img/nat-8.jpg"
            alt="Tour photo"
            className="modal-content-left-img"
          />
          <img
            src="img/nat-9.jpg"
            alt="Tour photo"
            className="modal-content-left-img"
          />
        </div>
        <div className="modal-content-right">
          <div onClick={handleClick} className="exit-button-container">
            <button className="exit-button">X</button>
          </div>
          <h2 className="heading-secondary heading">Start booking now</h2>
          <div className="modal-block">
            <h3 className="heading-tertiary">Tour description</h3>
            <p className="modal-text">{about}</p>
          </div>
          <div className="btn-container">
            <button className="btn">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
