import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import PokemonList from './components/routes/PokemonList';
import TypeList from './components/routes/TypeList';
import {useHttp} from './hooks/Http';


const App = props => {
  
  /*const [state, setState] = useState({
    pokemons : [],
    types: []
  });
  */

  /*const [pokemons, setPokemons] = useState([]);

  const [types, setTypes] = useState([]);


  const pokemonHandler = (data) => {
    setPokemons(data.results);
  }

  const typeHandler = (res) => {
    setTypes(data.results);
  }*/

  const [isLoadingPokemons, pokemonData] = useHttp('https://pokeapi.co/api/v2/pokemon');
  const [isLoadingTypes, typeData] = useHttp('https://pokeapi.co/api/v2/type');

 /* useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon'
      ).then(res => pokemonHandler(res))
  }, []);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type')
    .then(res => typeHandler(res))
  }, []);

  */
  
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
