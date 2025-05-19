import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityList from './components/CityList'
import CityForecast from './components/CityForecast';


function App() {
  return (
    
      <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/forecast/:cityName" element={<CityForecast />} />
        </Routes>
      </Router>

      </div>
      
      
  )
}

export default App;
