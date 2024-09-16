import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  test("should render Hello with the name when name is provided", () => {
    render(<Greet name="Evelin" />);
    //screen.debug(); //To see the virtual DOM
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello evelin/i);
  });
  test("should render login button with name in not provided", () => {
    render(<Greet />);
    //screen.debug(); //To see the virtual DOM
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
