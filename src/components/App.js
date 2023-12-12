import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LivingRoomScene from "./LivingRoomScene";
import Sitting from "./Sitting";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/playarea1" element={<LivingRoomScene />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
