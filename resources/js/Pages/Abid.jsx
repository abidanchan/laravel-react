import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from './Test';
import Welcome from './Welcome';

function Abid() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default Abid;