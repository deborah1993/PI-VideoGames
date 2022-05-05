import {
  GET_GENRES,
  FILTER_BY_GENRE,
  FILTER_BY_SOURCE,
  ORDER_BY,
  GET_GAME_DETAIL,
  GET_GAMES,
  ADD_GAME,
  SEARCH_GAMES,
} from "../actions";

let initialState = {
  loadedGames: [],
  genres: [],
  gameDetail: {},
};

export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_GAME) {
    return {
      ...state,
      loadedGames: state.loadedGames.concat(action.payload),
    };
  }
  if (action.type === GET_GAMES) {
    return {
      ...state,
      loadedGames: action.payload,
    };
  }
  if (action.type === SEARCH_GAMES) {
    return {
      ...state,
      loadedGames: action.payload.slice(0, 15),
    };
  }
  if (action.type === GET_GAME_DETAIL) {
    return {
      ...state,
      gameDetail: action.payload,
    };
  }
  if (action.type === ORDER_BY) {
    if (action.payload === "A-Z") {
      return {
        ...state,
        loadedGames: state.loadedGames.slice().sort((game1, game2) => {
          if (game1.slug < game2.slug) {
            return -1;
          } else if (game1.slug > game2.slug) {
            return 1;
          } else {
            return 0;
          }
        }),
      };
    } else if (action.payload === "Z-A") {
      return {
        ...state,
        loadedGames: state.loadedGames.slice().sort((game1, game2) => {
          if (game1.slug < game2.slug) {
            return 1;
          } else if (game1.slug > game2.slug) {
            return -1;
          } else {
            return 0;
          }
        }),
      };
    } else if (action.payload === "0-5") {
      return {
        ...state,
        loadedGames: state.loadedGames.slice().sort((game1, game2) => {
          if (game1.rating < game2.rating) return -1;
          if (game1.rating > game2.rating) return 1;
          else return 0;
        }),
      };
    } else if (action.payload === "5-0") {
      return {
        ...state,
        loadedGames: state.loadedGames.slice().sort((game1, game2) => {
          if (game1.rating < game2.rating) return 1;
          if (game1.rating > game2.rating) return -1;
          else return 0;
        }),
      };
    }
  }
  if (action.type === FILTER_BY_GENRE) {
    return {
      ...state,
      loadedGames: state.loadedGames.filter((game) =>
        game.genres.some((genre) => genre.name === action.payload)
      ),
    };
  }
  if (action.type === FILTER_BY_SOURCE) {
    if (action.payload === "DB") {
      return {
        ...state,
        loadedGames: state.loadedGames.filter((game) => game.id.length > 9),
      };
    }
    if (action.payload === "API") {
      return {
        ...state,
        loadedGames: state.loadedGames.filter(
          (game) => game.id.toString().length < 9
        ),
      };
    }
  }
  if (action.type === GET_GENRES) {
    return {
      ...state,
      genres: action.payload,
    };
  }
  return state;
}
