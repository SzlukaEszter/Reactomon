import React from 'react';
import PokemonCard from '../PokemonCard';
import uuid from 'uuid';

const TypeList = props =>{
    return (
        <div>
            <div style={{display : 'flex', flexFlow: 'row wrap'}}>
                {props.types.map((type) =>
                (<PokemonCard key={uuid.v4()} pokemon = {type}></PokemonCard> ))}
            </div>
        </div>
    )
}

export default TypeList
