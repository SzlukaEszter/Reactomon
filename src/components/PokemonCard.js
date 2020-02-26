import React from 'react';
import styled from 'styled-components';
import {Title } from './routes/Home';
import Img from 'react-image';

const StyledCard = styled.div`
width: 15em;
margin: 20px; 
padding: 2em;
border-radius: 10%;
box-shadow: 5px 5px 8px grey;
background-color: white;
border: 2em lightgrey;
color: blue;
`;

const StyledImg = styled(Img)`
height: ${props => props.height};
display: block;
  margin-left: auto;
  margin-right: auto;
`;

const DetailsLink = styled.div`
background-color: white;
border-top: solid 1px lightgrey;
color: darkgrey;
min-height: 30px;
min-width: 30px;
align: center;
`;

const Details = styled.div`
position: relative;
`;

//todo: make overlay to show up on hover
const Overlay = styled.div`
display: none;
color: #3b3a39;
${Details}:hover & {
    display: block;
}
  position: absolute;
  top: 3;
  left: 0;
  zIndex: 100;
  padding: 1em;
  background-color: #f5c236;
  border-radius: 10%;
box-shadow: 5px 5px 8px grey;`;

const PokemonCard = props =>
 {



    return (
        <StyledCard>
            <Title size='2 em'>{props.pokemon.name}</Title>
            <StyledImg src={[`/${props.pokemon.name}.png` , '/pngguru.png' ]} alt={props.pokemon.name} height='10em'></StyledImg>
            <Details>
            <DetailsLink >Details</DetailsLink>
            <Overlay>Lorem ipsum dolor  </Overlay>
            </Details>
        </StyledCard>
    )
   
}

export default PokemonCard;
