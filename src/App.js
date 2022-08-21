import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Server-SideRendering/Home";
import About from "./components/Server-SideRendering/About";
import Articles from "./components/Server-SideRendering/Articles";
import StateApp from "./components/StateManagement/useState/StateApp";

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/counter" element={<StateApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
