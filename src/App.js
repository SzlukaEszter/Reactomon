import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import PokemonList from './components/routes/PokemonList';
import TypeList from './components/routes/TypeList';
import {useHttp} from './hooks/Http';
import styled from 'styled-components';


const App = props => {
  

  const [isLoadingPokemons, pokemonData] = useHttp('https://pokeapi.co/api/v2/pokemon', []);
  const [isLoadingTypes, typeData] = useHttp('https://pokeapi.co/api/v2/type', []);
  
  const getListStyle = () => {return {display : 'flex'}};
    
  return (
      
        <div className='App'> 
        <Router>
          <Header/>
          <Route  exact path='/' component = {Home}/>
            <Route path='/pokemons' render = {props => (
              <React.Fragment>
              <PokemonList style={getListStyle} pokemons={pokemonData}></PokemonList>
            </React.Fragment>
            )}
            />
            <Route path='/types' render = {props => (
              <React.Fragment>
              <TypeList style={getListStyle} types={typeData}></TypeList>
            </React.Fragment>
            )}
            />
            </Router>
        </div>
      
    
    );
   }

export default App;
