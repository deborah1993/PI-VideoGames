import React from "react";
import "./Games.css";
import Game from "../Game/Game.js";
import { connect } from "react-redux";

function Games({ genres, loadedGames, posts }) {
  React.useEffect(() => {}, [genres, loadedGames]);

  //console.log(posts);
  return (
    <div className="contenedor">
      {posts && posts?.map((post, i) => <Game key={i} props={post}></Game>)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    loadedGames: state.loadedGames,
  };
}

export default connect(mapStateToProps, null)(Games);
