import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import PokemonList from "./components/routes/PokemonList";
import TypeList from "./components/routes/TypeList";
import { useHttp } from "./hooks/Http";

const App = props => {
  
  const [isLoadingPokemons, pokemons] = useHttp(
    "https://pokeapi.co/api/v2/pokemon",
    []
  );
  const [isLoadingTypes, types] = useHttp("https://pokeapi.co/api/v2/type", []);
  console.log(pokemons);
  console.log(types);
  
  const getListStyle = () => {
    return { display: "flex" };
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route
          path="/pokemons"
          render={props => (
            <React.Fragment>
              <PokemonList
                style={getListStyle}
                pokemons={pokemons.results}
              ></PokemonList>
            </React.Fragment>
          )}
        />
        <Route
          path="/types"
          render={props => (
            <React.Fragment>
              <TypeList style={getListStyle} types={types.results}></TypeList>
            </React.Fragment>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
