import React from 'react';
import './Header.scss';

export default () => (
  <header className="header">
    <div className="logo-box">
      <img src="../img/logo-white.png" alt="Logo" className="logo"></img>
    </div>
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">Nature</span>
        <span className="heading-primary-sub">is where life happens</span>
      </h1>
    </div>
  </header>
);
