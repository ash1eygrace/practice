import React from "react";
import { Route, Routes } from "react-router-dom";

// App components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import HTML from "./components/courses/HTML";
import CSS from "./components/courses/CSS";
import JavaScript from "./components/courses/JavaScript";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="courses/*" element={<Courses />}>
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
