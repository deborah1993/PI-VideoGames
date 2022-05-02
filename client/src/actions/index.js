import axios from "axios";

export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER_BY = "ORDER_BY";
export const GET_GAME_DETAIL = "GET_GAME_DETAIL";
export const GET_GAMES = "GET_GAMES";
export const ADD_GAME = "ADD_GAME";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const GET_GENRES = "GET_GENRES";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";

export function getGenres() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/genres`)
      .then((response) => {
        dispatch({ type: GET_GENRES, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function filterByGenre(payload) {
  return { type: FILTER_BY_GENRE, payload };
}

export function filterBySource(payload) {
  return { type: FILTER_BY_SOURCE, payload };
}

export function orderBy(payload) {
  return { type: ORDER_BY, payload };
}

export function getGames() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogames`)
      .then((response) => {
        dispatch({ type: GET_GAMES, payload: response.data });
        //console.log(response.data) --> devuelve un array de 40 elementos
      })
      .catch((error) => console.log(error));
  };
}

export function searchGames(name) {
  if (name) {
    return function (dispatch) {
      return axios
        .get(`http://localhost:3001/videogames/?name=${name}`)
        .then((response) => {
          //console.log(response.data);
          dispatch({ type: SEARCH_GAMES, payload: response.data });
        })
        .catch((error) => console.log(error));
    };
  } else {
    return { msg: "Se necesita un nombre" };
  }
}

export function getGameDetail(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/videogame/${id}`)
      .then((response) => {
        dispatch({ type: GET_GAME_DETAIL, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function addGame(game) {
  return function (dispatch) {
    return axios
      .post(`http://localhost:3001/videogame`, game)
      .then((response) => {
        dispatch({
          type: ADD_GAME,
          payload: game,
        });
      })
      .catch((error) => console.log(error));
  };
}
