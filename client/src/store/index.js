import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index.js";
import thunk from "redux-thunk"; // este nos permite despachar acciones asincronas, ya que mis accions van a hacer gets

//habilita el redux devtools en el navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
