import React from 'react';
import moment from 'moment';
import './ToursInfo.scss';

export default ({ tour }) => {
  console.log(tour);
  const { city, country, start_date, stops, max_people } = tour;
  const location = `${city}, ${country}`;
  const date = moment(start_date).format('MMM yyyy');
  const entries = [
    {
      item: location,
      icon: 'https://unpkg.com/@icon/linea-basic/icons/geolocalize-01.svg'
    },
    {
      item: `Stops: ${stops}`,
      icon: 'https://unpkg.com/@icon/linea-basic/icons/flag1.svg'
    },
    {
      item: date,
      icon: 'https://unpkg.com/@icon/linea-basic/icons/calendar.svg'
    },
    {
      item: `people: ${max_people}`,
      icon: 'https://unpkg.com/@icon/linea-basic/icons/headset.svg'
    }
  ];
  return (
    <div className="tours-info-flex">
      {entries.map(entry => {
        const { item, icon } = entry;
        return (
          <div className="tours-info-content">
            <span>
              <img height="16" width="16" src={icon} />
            </span>
            <span className="tours-info-text">{item}</span>
          </div>
        );
      })}
    </div>
  );
};
