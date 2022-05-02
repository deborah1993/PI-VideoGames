import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import store from "./store/index";
import { createStore } from "redux";

describe("App debe renderizar Landing y ButtonHome", () => {
  // render(<App />);
  //const linkElement = screen.getByText("links");
  //expect(linkElement).toBeInTheDocument();
  it("should have the correct className", () => {
    const { container } = render(<App></App>);

    expect(container.firstChild).toHaveClass("app");
  });
});
