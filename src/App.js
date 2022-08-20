import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Server-SideRendering/Home";
import About from "./components/Server-SideRendering/About";
import Articles from "./components/Server-SideRendering/Articles";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
