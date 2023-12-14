import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import LivingRoomScene from "./LivingRoomScene";
import Sitting from "./Sitting";
import SittingFireworks from "./SittingFireworks";
import GetTreat from "./GetTreat";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} className="container"/>
          <Route path="/playarea1" element={<LivingRoomScene />} />
          <Route path="/playarea2" element={<Sitting />} />
          <Route path="/playarea3" element={<SittingFireworks />} />
          <Route path="/playarea4" element={<GetTreat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
