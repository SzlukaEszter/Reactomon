import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import axios from 'axios';
import PokemonList from './components/routes/PokemonList';
import TypeList from './components/routes/TypeList';


const App = props => {
  
  /*const [state, setState] = useState({
    pokemons : [],
    types: []
  });
  */

  const [pokemons, setPokemons] = useState([]);

  const [types, setTypes] = useState([]);


  const pokemonHandler = (res) => {
    setPokemons(res.data.results);
  }

  const typeHandler = (res) => {
    setTypes(res.data.results);
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon'
      ).then(res => setState({pokemons : res.data.results}));
    axios.get('https://pokeapi.co/api/v2/type').then(res => this.setState({types : res.data.results}));
  }
  getListStyle = () => {return {display : 'flex'}};
    return (
      
        <div className='App'> 
        <Router>
          <Header/>
          <Route  exact path='/' component = {Home}/>
            <Route path='/pokemons' render = {props => (
              <React.Fragment>
              <PokemonList style={getListStyle} pokemons={this.state.pokemons}></PokemonList>
            </React.Fragment>
            )}
            />
            <Route path='/types' render = {props => (
              <React.Fragment>
              <TypeList style={getListStyle} types={this.state.types}></TypeList>
            </React.Fragment>
            )}
            />
            </Router>
        </div>
      
    
    );
   }

export default App;
