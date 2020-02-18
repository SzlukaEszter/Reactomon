import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class PokemonCard extends Component {

    render() {

        return (
            <div style={{
                margin: '20px', 
                padding: '30px', 
                border: '3px solid orange',
                borderRadius: '10px',
                boxShadow: '5px 5px 3px grey',
                backgroundColor: 'yellow',
                color: 'blue'
            }}>
                <h2>{this.props.pokemon.name}</h2>
                <Link style={{color: 'black'}} to={this.props.pokemon.url}>Details</Link> 
            </div>
        )
    }
}

export default PokemonCard
