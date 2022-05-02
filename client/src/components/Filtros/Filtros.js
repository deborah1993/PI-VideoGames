import React from "react";
import "./Filtros.css";
import { connect } from "react-redux";
import { orderBy, filterByGenre, filterBySource } from "../../actions";

function Filtros(props) {
  function genreFilter(e) {
    let genre = e.target.value;
    props.filterByGenre(genre);
  }

  function ordenar(e) {
    let orden = e.target.value;
    props.orderBy(orden);
  }

  function sourceFilter(e) {
    let source = e.target.value;
    props.filterBySource(source);
  }

  return (
    <div className="contenedor-filtros">
      <div>
        <label>Ordenar</label>
        <select
          defaultValue="selected"
          className="select"
          onChange={(e) => ordenar(e)}
        >
          <option value="selected"></option>
          <option value="A-Z">Alfabeticamente A-Z</option>
          <option value="Z-A">Alfabeticamente Z-A</option>
          <option value="0-10">Ranking 0-10</option>
          <option value="10-0">Ranking 10-0</option>
        </select>
      </div>
      <div>
        <label>Genero</label>
        <select
          defaultValue="selected"
          className="select"
          onChange={(e) => genreFilter(e)}
        >
          <option value="selected"></option>
          {props.genres?.map((genero) => (
            <option key={genero.id} value={genero.name}>
              {genero.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Desde</label>
        <select
          defaultValue="selected"
          className="select"
          onChange={(e) => sourceFilter(e)}
        >
          <option value="selected"></option>
          <option value="API">API</option>
          <option value="DB">DB</option>
        </select>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    loadedGames: state.loadedGames,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterBySource: (type) => dispatch(filterBySource(type)),
    filterByGenre: (genre) => dispatch(filterByGenre(genre)),
    orderBy: (type) => dispatch(orderBy(type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtros);
