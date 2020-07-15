import React from 'react';
import About from './About';
import Features from './Features';
import Tours from './Tours';

export default ({ tours }) => (
  <main>
    <About />
    <Features />
    <Tours tours={tours} />
  </main>
);
