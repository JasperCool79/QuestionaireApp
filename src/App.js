import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Welcome from './views/welcome/Welcome';
import PersonalInfo from './views/personal_info/personal_info';
import Gender from './views/gender/gender';
import AgeInfo from './views/age/age_info';
import Country from './views/country/country';
import SpicyRange from './views/spicy_range/spicy_range';
import Result from './views/result/result';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="personal-info" element={<PersonalInfo />}/>
            <Route path="gender" element={<Gender />}/>
            <Route path="age-info" element={<AgeInfo />}/>
            <Route path="country" element={<Country />}/>
            <Route path="spicy-range" element={<SpicyRange />}/>
            <Route path="show-result" element={<Result />}/>
          </Routes>
    </div>
  );
}

export default App;
