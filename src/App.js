import React from "react";
//import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import PokemonList from "./components/routes/PokemonList";
import TypeList from "./components/routes/TypeList";
import styled from 'styled-components';

const App = props => {
  
  const AppContainer = styled.div`
background-image: url('/background2.jpg');
height: 100%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
 

  return (
    <AppContainer>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/pokemons" component= {PokemonList}/>
        <Route path="/types" component ={TypeList}/>
      </Router>
      </AppContainer>
  );
};

export default App;
