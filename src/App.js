import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Player from "./components/video/Player";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/about">
            <Player />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
