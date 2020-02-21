import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color: yellow;
  text-align: center;
  font-size: 10 px;
  `;

const Home = (props) =>  {

      return (
        <div>
        <Title>WELLCOME TO HOME OF POKEMONS!</Title>
        <h2>This is Piccatchu:</h2>
        <img src={require('./toppng.com-pokemon-633x530.png')} alt='Pokemons'></img>
      </div> 
      );

}
  export default Home;