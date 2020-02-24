import React from "react";
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 3em;
  color:  #ffcb05;
  text-align: center;
  text-shadow: -2px 3px 0 #3c5aa6, -2px 3px 0 #3c5aa6, -4px 6px 0 #3c5aa6, -0px 0px 0 #3c5aa6;
  -webkit-text-stroke-width: 3px; 
            -webkit-text-stroke-color: #2a75bb; 

  `;

const SubTitle = styled.h2`
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 2em;
  color:  #ffcb05;
  text-align: center;
  text-shadow: -1px 2px 0 #3c5aa6, -1px 2px 0 #3c5aa6, -2px 3px 0 #3c5aa6, -0px 0px 0 #3c5aa6;
  -webkit-text-stroke-width: 2px; 
            -webkit-text-stroke-color: #2a75bb; 

  `;

const Image = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.width};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.img`

width: ${props => props.width};
display: block;
  margin-left: auto;
  margin-right: auto;
animation: ${rotate} 5s linear infinite;
`;

const Home = (props) =>  {

      return (
        <div height='100%'>
        
        <Rotate src={require('./pokeball-clipart-closed-3-transparent.png')} alt='Pokemons' width='15%'></Rotate>
        <Title>LeT'S FiND PiCaTCHu!</Title>
      </div>
      
  
      );

}
  export default Home;