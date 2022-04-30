import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import createStore from "redux";
import store from "./store/index";

describe("App debe renderizar Landing y ButtonHome", () => {
  let store = createStore();

  render(<App />);
  //const linkElement = screen.getByText("links");
  //expect(linkElement).toBeInTheDocument();
});
