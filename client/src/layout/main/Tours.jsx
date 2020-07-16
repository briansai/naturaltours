import React from 'react';
import ToursInfo from './ToursInfo';
import ToursDetails from './ToursDetails';
import './Tours.scss';

export default ({ tours }) => {
  const toursData = tours.slice(0, 3);
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-8">
        <h2 className="heading-secondary">Live a healthier life</h2>
      </div>
      <div className="tours-flex">
        {toursData.map((tour, index) => {
          const { adventure, detail, image, difficulty, days, ...rest } = tour;
          return (
            <div key={`${tour}-${index}`} className="tours-box">
              <div className="tours-img-overlay">
                <img className="tours-img" src={image} alt={image} />
                <div className="card-heading">
                  <span className="card-heading-span">{adventure}</span>
                </div>
              </div>
              <div className="tours-text">
                <h4 className="heading-tertiary">
                  {difficulty} {days}-day tour
                </h4>
                <p className="tours-para">{detail}</p>
              </div>
              <ToursInfo tour={rest} />
              <ToursDetails tour={rest} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
