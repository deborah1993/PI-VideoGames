import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.js";
import Filtros from "../Filtros/Filtros.js";
import { getGames } from "../../actions/index.js";
import { connect } from "react-redux";

function NavBar(props) {
  function handleClick(e) {
    e.preventdefault();
    props.getGames();
  }

  return (
    <nav className="nav-bar">
      <Link exact to="/home" onClick={(e) => handleClick(e)} className="links">
        HOME
      </Link>
      <Link to="/add" className="links">
        ADD
      </Link>
      <SearchBar />
      <Filtros className="barra-filtros" />
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getGames: () => dispatch(getGames()),
  };
}

export default connect(null, mapDispatchToProps)(NavBar);
