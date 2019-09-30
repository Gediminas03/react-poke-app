import React from "react";
import "./App.css";
import Home from "./components/home.jsx";
import NavBar from "./components/navBar";
import PokeList from "./components/pokeList";
import PokeInfo from "./components/pokeInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/PokeList" exact component={PokeList} />
          <Route path="/components/PokeList/:name" component={PokeInfo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
