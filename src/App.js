import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Homepage from "./Homepage";
import Contact from "./Contact";
import GlobalStyles from "./GlobalStyles";
import Bio from "./Bio";
import Projects from "./Projects";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/" element={<Homepage />} />
        </Routes>

    </Router>
  )
}
export default App;