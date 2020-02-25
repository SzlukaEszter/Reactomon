import React from "react";
import styled, {keyframes} from 'styled-components';

export const Title = styled.h1`
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: ${props => props.size};
  color:  #ffcb05;
  text-align: center;
  text-shadow: -1px 2px 0 #3c5aa6, -1px 2px 0 black, -2px 4px 0 #3c5aa6, -0px 0px 0 #3c5aa6;
  -webkit-text-stroke-width: 2px; 
            -webkit-text-stroke-color: #2a75bb; 

  `;

export const Image = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.width};
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Rotate = styled.img`

width: ${props => props.width};
display: inline-block;
animation: ${rotate} 5s linear infinite;
`;

const Home = (props) =>  {

      return (
        <div>
        <Title size='3 em'>WeLCoMe To HoMe</Title>
        <Title size='3 em'>oF</Title>
        <Image src='/pkmn-logo.png' alt='logo' width='30%'/>
        <Image src={require('./toppng.com-pokemon-633x530.png')}alt='Pikatchu' width='30%'/>
      </div>
      
  
      );

}
  export default Home;