import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Title } from './routes/Home';
import Img from 'react-image';
import { useState} from "react";

const StyledCard = styled.div`
width: 15em;
margin: 20px; 
padding: 2em;
border-radius: 10%;
box-shadow: 5px 5px 8px grey;
background-color: white;
border: 2em lightgrey;
background-repeat: repeat;
background-size: 40em;
color: blue;
`;

const StyledImg = styled(Img)`
widht: ${props => props.width};
display: block;
  margin-left: auto;
  margin-right: auto;
`;

const CardHeader = styled.div`
width: 100%;
background-image: '/cubes.png';
background-repeat: repeat;
background-size: 40em;
`;

const DetailsLink = styled(Link)`
color: darkgrey;
&:hover {color: red;
        } `;



const DetailsButton = styled(Link)`
border: 2em lightgrey;
background-color: yellow;
border-radius: 30%;
box-shadow: 2x 2px 3px grey
color: darkgrey;
&:hover {color: red;}
`;

const Details = styled.div`
display: ${props => props.display};
position: absolute;
background-color: lightgrey;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0, 0.2);
z-index: 1;
color: darkgrey;
`;







const PokemonCard = props =>
 {
    const [displayDetails, setDisplayDetails] = useState('none');


    return (
        <StyledCard>
            <CardHeader>
            <Title size='2 em'>{props.pokemon.name}</Title>
            </CardHeader>
            <StyledImg src={[`/${props.pokemon.name}.png` , '/pkmn-logo.png' ]} alt={props.pokemon.name} width='80%'></StyledImg>
            <Details display={displayDetails}>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor </Details>
        </StyledCard>
    )
   
}

export default PokemonCard
