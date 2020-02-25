import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div `
text-align: center;
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
margin-top: 20px;
margin-boottom: 20px;
animation: ${rotate} 5s linear infinite;
`;

const Header = props => {

    return (
      <Wrapper>
        <Rotate src={require('./routes/pokeball-clipart-closed-3-transparent.png')} alt='Pokemons' width='5%'></Rotate>
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
