import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, } from 'react-router-dom';

const weatherData = {
    "NewYork": {
        "summary": "Sunny, 25°C",
        "details": "Clear skies throughout the day with mild temperatures.",
    },
    "London": {
        "summary": "Cloudy, 18°C",
        "details": "Overcast with occasional light rain in the afternoon.",
    },
    "Tokyo": {
        "summary": "Rainy, 22°C",
        "details": "Continuous rain expected throughout the day.",
    }
  }
function CityList() {

    //extract city names from the keys of the object!
    const cities = Object.keys(weatherData);

    return (
    <div className="city-list">
        <h2>Select a City</h2>
        <ul>
            {cities.map((cityName) => (
                <li key = {cityName} className="city-name">
                <Link to={`/forecast/${cityName}`}>{cityName}</Link>
                </li>
            ))}
        </ul>
    </div> 
    )
}

export default CityList

