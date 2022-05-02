import { render } from "@testing-library/react";
import App from "./App";

describe("debe tener la clase app", () => {
  // render(<App />);
  //const linkElement = screen.getByText("links");
  //expect(linkElement).toBeInTheDocument();
  it("should have the correct className", () => {
    const container = render(<App></App>);

    expect(container.firstChild).toHaveClass("app");
  });
});
