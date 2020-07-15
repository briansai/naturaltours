import React, { useState, useEffect } from 'react';
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';
import { toursAPI } from '../api/toursAPI';
import './App.scss';

export default () => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const fetchTours = async () => {
      const data = await toursAPI();
      setTours(data);
    };

    fetchTours();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main tours={tours} />
    </div>
  );
};
