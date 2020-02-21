import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = props => {

    const Wrapper = styled.div `
      background-color: #383838,
      text-shadow:
        -1px 1px 0 #000, 1px 1px 0 black, 1px -1px 0 red,-1px -1px 0 black
    `;

    return (
      <Wrapper>
        <h1>Reactomon</h1>
        <div className="navbar" style={{ color: "orange", textShadow: "none" }}>
          <Link className="link" to="/">
            Home
          </Link>
          |
          <Link className="link" to="/pokemons">
            Pokemons
          </Link>
          |
          <Link className="link" to="/types">
            Types
          </Link>
        </div>
      </Wrapper>
    );
  }
export default Header;
