import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Projects from "./Projects";
import BioPage from "./BioPage"
import MarketoStuff from "./MarketoStuff";

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/marketostuff" element={<MarketoStuff />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>

    </Router>
  )
}
export default App;