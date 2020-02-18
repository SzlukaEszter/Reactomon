import React, { Component } from "react";
import uuid from 'uuid';
import PokemonCard from "../PokemonCard";


class PokemonList extends Component {

  render(){
      return (
        <div style={{display : 'flex', flexFlow: 'row wrap'}}>
        {this.props.pokemons.map((pokemon) =>
            (<PokemonCard key={uuid.v4()} pokemon = {pokemon}></PokemonCard> ))}
            </div>
            );
  }
}
  export default PokemonList;