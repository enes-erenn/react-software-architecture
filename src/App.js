import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Server-SideRendering/Home";
import About from "./components/Server-SideRendering/About";
import Articles from "./components/Server-SideRendering/Articles";
import StateApp from "./components/StateManagement/useState/StateApp";
import ContextApp from "./components/StateManagement/Context/ContextApp";
import RecoilApp from "./components/StateManagement/Recoil/RecoilApp";
import ReduxApp from "./components/StateManagement/Redux/ReduxApp";

function App() {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/counter">Counter useState</Link>
            <Link to="/counter-context">Counter Context</Link>
            <Link to="/counter-recoil">Counter Recoil</Link>
            <Link to="/counter-redux">Counter Redux</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/counter" element={<StateApp />} />
          <Route exact path="/counter-context" element={<ContextApp />} />
          <Route exact path="/counter-recoil" element={<RecoilApp />} />
          <Route exact path="/counter-redux" element={<ReduxApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
