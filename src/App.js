import React from "react";
//import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import PokemonList from "./components/routes/PokemonList";
import TypeList from "./components/routes/TypeList";

const App = props => {
  
 

  return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/pokemons" component= {PokemonList}/>
        <Route path="/types" component ={TypeList}/>
      </Router>
  );
};

export default App;
