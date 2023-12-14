import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LivingRoomScene from "./LivingRoomScene";
import Sitting from "./Sitting";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} className="container"/>
          <Route path="/playarea1" element={<LivingRoomScene />} />
          <Route path="/playarea2" element={<Sitting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
