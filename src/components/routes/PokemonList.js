import React from "react";
import uuid from 'uuid';
import PokemonCard from "../PokemonCard";
import {Rotate, Image} from './Home';
import {useHttp} from '../../hooks/Http';



const PokemonList = props =>{

  const [isLoadingPokemons, pokemons] = useHttp(
    "https://pokeapi.co/api/v2/pokemon",
    []
  );

      return (
        <div style={{display : 'flex', flexFlow: 'row wrap'}}> 
        {pokemons ? pokemons.results.slice(0,7).map((pokemon) =>
            (<PokemonCard key={uuid.v4()} pokemon = {pokemon}></PokemonCard> )) : 
            <Rotate src={require('./pokeball-clipart-closed-3-transparent.png')} alt='Pokemons' width='5%'></Rotate>}
            </div>
            );
}
  export default PokemonList;