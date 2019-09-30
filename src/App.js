import React from "react";
import "./App.css";
import Home from "./components/home.jsx";
import NavBar from "./components/navBar";
import PokeList from "./components/pokeList.js";
import PokeInfo from "./components/pokeInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/components/PokeList" component={PokeList} />
        <Route path="/components/PokeInfo" component={PokeInfo} />
      </div>
    </Router>
  );
}

export default App;
