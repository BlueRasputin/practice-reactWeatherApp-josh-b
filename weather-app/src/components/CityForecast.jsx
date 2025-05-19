import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CityList from './CityList';
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
function CityForecast() {
  const { cityName } = useParams();
  const [city, setCity] = useState(null);
  const [showDetails,setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedCity = weatherData[cityName];
      setCity(fetchedCity || null);

    }, 100);

  }, [cityName]);

  const handleScroll = () => {
    setShowDetails(true);
    detailsRef.current?.scrollIntoView({behavior: 'smooth'});
  };
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
      <button onClick={handleScroll} className='view-details'>
        View Details
      </button>
      {showDetails && (
      <p ref={detailsRef} className='details'>
        {city.details}
      </p>
      )}
      <Link to="/" className="back-link">Back to City List</Link>
    </div>
  );
}
export default CityForecast;