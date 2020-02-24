import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div `
background-color: lightblue;
text-align: center;
`;

const Image = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.width};
`;

const StyledLink = styled(Link)`
text-decoration: none;
font-size: 1.5em;
color: #3c5aa6;
&:hover {
  color: red;
} 
`;

const NavBar = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const Header = props => {

    return (
      <Wrapper>
        <Image src={require('./routes/pkmn-logo.png')} alt='logo' width='30%'/>
        <NavBar>
          <StyledLink to="/">
            Home
          </StyledLink>
          |
          <StyledLink to="/pokemons">
            Pokemons
          </StyledLink>
          |
          <StyledLink to="/types">
            Types
          </StyledLink>
        </NavBar>
      </Wrapper>
    );
  }
export default Header;
