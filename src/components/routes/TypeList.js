import React, { Component } from 'react';
import PokemonCard from '../PokemonCard';
import uuid from 'uuid';

export class TypeList extends Component {
    render() {
        return (
            <div>
                <div style={{display : 'flex', flexFlow: 'row wrap'}}>
        {this.props.types.map((type) =>
            (<PokemonCard key={uuid.v4()} pokemon = {type}></PokemonCard> ))}
            </div>
            </div>
        )
    }
}

export default TypeList
