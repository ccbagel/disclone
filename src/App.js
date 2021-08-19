import React from 'react';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
          <Route path="/Login">
              <Detail />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
