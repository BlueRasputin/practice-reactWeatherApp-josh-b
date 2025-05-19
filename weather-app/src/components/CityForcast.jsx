import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as cities from '../data/weather-data.json';
import CityList from './CityList';

function CityForecast() {
  const { cityName } = useParams();
  const city = cities.find((c) => c.name === cityName);

  if (!cityName || !city) { 
    return (
      <div className="container">
        <h1 className="title">Weather data not available for this city</h1>
        <p className="error">Invalid or missing city.</p>
        <Link to="/" className="back-link">Back to City List</Link>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="name">{city.name}</h1>
      <p className="summary">{city.summary}</p>
      
      <p className ="details">{city.details}</p>
      
      <Link to="/" className="back-link">Back to City List</Link>
    </div>
  );
}
export default CityForcast;