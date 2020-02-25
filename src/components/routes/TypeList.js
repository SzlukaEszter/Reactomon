import React from 'react';
import PokemonCard from '../PokemonCard';
import uuid from 'uuid';
import {useHttp} from '../../hooks/Http';
import {Rotate} from './Home';

const TypeList = props =>{

  const [isLoadingTypes, types] = useHttp(
    "https://pokeapi.co/api/v2/type", []
  );

    return (
        <div>
            <div style={{display : 'flex', flexFlow: 'row wrap'}}>
                {types ? types.results.map((type) =>
                (<PokemonCard key={uuid.v4()} pokemon = {type}></PokemonCard> ))
                : 
                <Rotate src={require('./pokeball-clipart-closed-3-transparent.png')} alt='Pokemons' width='5%'></Rotate>}}
            </div>
        </div>
    );
                }

export default TypeList
