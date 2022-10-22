import Aboutpage from "./components/Aboutpage";
import Featurespage from "./components/Featurespage";
import Contactpage from "./components/Contactpage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/hovps" element={<Home />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/featurespage" element={<Featurespage />} />
          <Route path="/contactpage" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
