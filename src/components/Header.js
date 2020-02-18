import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    const getStyle = {
      backgroundColor: "#383838",
      textShadow:
        "-1px 1px 0 #000, 1px 1px 0 black, 1px -1px 0 red,-1px -1px 0 black"
    };

    return (
      <div className="header" style={getStyle}>
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
      </div>
    );
  }
}
export default Header;
