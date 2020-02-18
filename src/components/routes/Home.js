import React, { Component } from "react";


class Home extends Component {
  render(){
      return (
        <div>
        <h1>WELLCOME TO HOME OF POKEMONS!</h1>
        <h2>This is Piccatchu:</h2>
        <img src={require('./toppng.com-pokemon-633x530.png')} alt='Pokemons'></img>
      </div> 
      );
  }
}
  export default Home;