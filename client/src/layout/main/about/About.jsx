import React from 'react';
import './About.scss';

export default () => (
  <section className="section-about">
    <div className="u-center-text u-margin-bottom-8">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>
    <div className="about-description">
      <div className="about-text">
        <h3 className="heading-tertiary">
          You're going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          animi autem consequatur? Eveniet fugiat laboriosam vero delectus
          maiores saepe, totam quam doloribus, ullam iusto, ex omnis maxime
          veritatis dignissimos expedita.
        </p>
        <h3 className="heading-tertiary">
          You're going to fall in love with nature
        </h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          exercitationem dolorum eaque corporis ipsa placeat deserunt, corrupti
          beatae ea facilis harum odit nihil! Quibusdam, molestiae possimus?
          Ducimus vitae illum consequatur?
        </p>
      </div>
      <div className="about-img">
        <div className="composition">
          <img
            src="img/nat-1-large.jpg"
            alt="Photo 1"
            className="composition-photo p1"
          />
          <img
            src="img/nat-2-large.jpg"
            alt="Photo 2"
            className="composition-photo p2"
          />
          <img
            src="img/nat-3-large.jpg"
            alt="Photo 3"
            className="composition-photo p3"
          />
        </div>
      </div>
    </div>
  </section>
);
