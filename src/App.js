import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home.jsx";
import NavBar from "./components/navBar";
import PokeList from "./components/pokeList";
import PokeInfo from "./components/pokeInfo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
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
}

export default App;
