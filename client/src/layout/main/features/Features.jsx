import React from 'react';
import './Features.scss';

export default () => {
  const features = [
    {
      name: 'world',
      source: 'https://unpkg.com/@icon/linea-basic/icons/world.svg',
      title: 'Explore the world',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem ex ipsam adipisci.'
    },
    {
      name: 'compass',
      source: 'https://unpkg.com/@icon/linea-basic/icons/compass.svg',
      title: 'Meet nature',
      text:
        'Molestias minima dignissimos esse enim excepturi consectetur, fugiat aliquam, non rem totam iusto dolorum.'
    },
    {
      name: 'map',
      source: 'https://unpkg.com/@icon/linea-basic/icons/map.svg',
      title: 'Find your way',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam eos dignissimos voluptate.'
    },
    {
      name: 'heart',
      source: 'https://unpkg.com/@icon/linea-basic/icons/heart.svg',
      title: 'Live a healthier life',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui labore et tempora sunt in ea.'
    }
  ];

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
