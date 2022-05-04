import { render } from "@testing-library/react";
import App from "./App";

test("debe tener la clase app", () => {
  // render(<App />);
  //const linkElement = screen.getByText("links");
  //expect(linkElement).toBeInTheDocument();
  const container = render(<App />);

  expect(container.firstChild).toHaveClass("app");
});
