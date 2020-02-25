import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Title, Image } from './routes/Home';
import Img from 'react-image';

const StyledCard = styled.div`
width: 12em;
margin: 20px; 
padding: 2em; 
border-radius: 6%;
box-shadow: 5px 5px 8px grey;
background-color: #c5ebfa;
color: blue;
`;

const StyledImg = styled(Img)`
widht: ${props => props.width};
display: block;
  margin-left: auto;
  margin-right: auto;
`

const PokemonCard = props =>
 {

    return (
        <StyledCard>
            <StyledImg src={[`/${props.pokemon.name}.png` , '/pkmn-logo.png' ]} alt={props.pokemon.name} width='80%'></StyledImg>
            <Title size='2 em'>{props.pokemon.name}</Title>
            <Link style={{color: 'black'}} to={props.pokemon.url}>Details</Link> 
        </StyledCard>
    )
   
}

export default PokemonCard
