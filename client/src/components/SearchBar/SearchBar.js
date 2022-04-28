import React from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import { searchGames } from "../../actions";

function Search(props) {
  const [game, setGame] = React.useState("");

  function handleChange(e) {
    setGame(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.searchGames(game);
    setGame("");
  }

  return (
    <div>
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            placeholder="videogame..."
            type="text"
            id="title"
            autoComplete="off"
            value={game}
            onChange={handleChange}
          />
        </div>
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    searchGames: (name) => dispatch(searchGames(name)),
  };
}

export default connect(null, mapDispatchToProps)(Search);
