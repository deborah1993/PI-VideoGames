import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

function Game(props) {
  //console.log(props.props);
  return (
    <div className="body-card">
      <Link to={`/videogame/${props.props.id}`}>
        <img
          src={props.props.background_image}
          alt="fondo"
          className="card-header"
        />
      </Link>
      <div className="card-body">
        <h3 className="game-name">{props.props.name}</h3>
        <p>{props.props.rating}</p>
      </div>
      <div className="card-footer">
        <h5 className="genre-title">Generos:</h5>
        {props.props.genres?.map((genre, i) => (
          <span key={i}>{genre.name}</span>
        ))}
      </div>
    </div>
  );
}

export default Game;
