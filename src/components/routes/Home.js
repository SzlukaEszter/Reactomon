import React from "react";
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 5em;
  color:  #ffcb05;
  text-align: center;
  text-shadow: -2px 3px 0 #3c5aa6, -2px 3px 0 #3c5aa6, -4px 6px 0 #3c5aa6, -0px 0px 0 #3c5aa6;
  -webkit-text-stroke-width: 6px; 
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

display: block;
  margin-left: auto;
  margin-right: auto;
animation: ${rotate} 5s linear infinite;
`;

const Home = (props) =>  {

      return (
        <div>
        <Title>WeLLCoMe To HoMe</Title>
        <Title>oF</Title>
        <Image src={require('./pkmn-logo.png')} alt='logo' width='70%'/>
        <SubTitle>LeT'S FiND PiCaTCHu!</SubTitle>
        <Rotate src={require('./pokeball-clipart-closed-3-transparent.png')} alt='Pokemons' align='middle'></Rotate>
      </div> 
  
      );

}
  export default Home;