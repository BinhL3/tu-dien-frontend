import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Definitions from "./Definitions";
function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/define" element={<Definitions />} />
          <Route path="/random" element={<Definitions />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/add" element={<Add />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
