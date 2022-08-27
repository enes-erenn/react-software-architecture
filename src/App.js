import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Server-SideRendering/Home";
import Articles from "./components/Server-SideRendering/Articles";
import StateApp from "./components/StateManagement/useState/StateApp";
import ContextApp from "./components/StateManagement/Context/ContextApp";
import RecoilApp from "./components/StateManagement/Recoil/RecoilApp";
import ReduxApp from "./components/StateManagement/Redux/ReduxApp";
import MobXApp from "./components/StateManagement/MobX/MobXApp";
import styled from "styled-components";
const Splitting = lazy(() => import("./components/CodeSplitting/Splitting"));

const Background = styled.div`
  width: 100%;
  height: 93vh;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const List = styled.ul`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Text = styled.span`
  font-weight: 600;
  color: #000814;
  padding: 1rem;
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;

function App() {
  return (
    <>
      <Router>
        <List>
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Text>Home</Text>
            </Link>
          </li>
          <li>
            <Link to="/counter" style={{ textDecoration: "none" }}>
              <Text>Counter useState</Text>
            </Link>
          </li>
          <li>
            <Link to="/counter-context" style={{ textDecoration: "none" }}>
              <Text>Counter Context</Text>
            </Link>
          </li>
          <li>
            <Link to="/counter-recoil" style={{ textDecoration: "none" }}>
              <Text>Counter Recoil</Text>
            </Link>
          </li>
          <li>
            <Link to="/counter-redux" style={{ textDecoration: "none" }}>
              <Text>Counter Redux</Text>
            </Link>
          </li>
          <li>
            <Link to="/counter-mobx" style={{ textDecoration: "none" }}>
              <Text>Counter MobX</Text>
            </Link>
          </li>
          <li>
            <Link
              to="/code-splitting"
              style={{ textDecoration: "none", color: "#000814" }}
            >
              <Text>Splitting</Text>
            </Link>
          </li>
        </List>
        <Background />
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/counter" element={<StateApp />} />
            <Route exact path="/counter-context" element={<ContextApp />} />
            <Route exact path="/counter-recoil" element={<RecoilApp />} />
            <Route exact path="/counter-redux" element={<ReduxApp />} />
            <Route exact path="/counter-mobx" element={<MobXApp />} />
            <Route exact path="/code-splitting" element={<Splitting />} />
          </Routes>
        </Suspense>
      </Router>

      {/* Use this instead of other one to use SSR */}

      {/*   <List>
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Home</Text>
          </Link>
        </li>
        <li>
          <Link
            to="/articles"
            style={{
              textDecoration: "none",
            }}
          >
            <Text>Articles</Text>
          </Link>
        </li>
      </List>
      <Background />
      <Suspense fallback={<p>Loading..</p>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles" element={<Articles />} />
        </Routes>
      </Suspense> */}
    </>
  );
}

export default App;
