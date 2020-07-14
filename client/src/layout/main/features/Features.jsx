import React, { useState, useEffect } from 'react';
import { featuresAPI } from '../../../api/featuresAPI';
import './Features.scss';

export default () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    const fetchFeatures = async () => {
      const data = await featuresAPI();
      setFeatures(data);
    };

    fetchFeatures();
  }, []);

  return (
    <section className="section-features">
      <div className="features-flex">
        {features.map(feature => {
          const { name, source, title, text } = feature;
          return (
            <div key={name} className="feature-box">
              <img
                className="feature-box-icon"
                height="50"
                width="50"
                src={source}
              />
              <h3 className="heading-tertiary">{title}</h3>
              <p className="feature-box-text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
