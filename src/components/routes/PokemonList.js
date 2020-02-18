import React from "react";
import uuid from 'uuid';
import PokemonCard from "../PokemonCard";


const PokemonList = props =>{

      return (
        <div style={{display : 'flex', flexFlow: 'row wrap'}}>
        {props.pokemons.map((pokemon) =>
            (<PokemonCard key={uuid.v4()} pokemon = {pokemon}></PokemonCard> ))}
            </div>
            );
}
  export default PokemonList;