import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  //!Reoganizando el código:
  const renderComponent = () => {
    render(<TermsAndConditions />);
    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      button: screen.getByRole("button"),
    };
  };
  test("should render with correct text and initial state", () => {
    //! Destructuring
    const { heading, checkbox, button } = renderComponent();

    // render(<TermsAndConditions />);
    // const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    // const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/submit/i);
    expect(button).toBeDisabled();
    //screen.debug();
  });

  test("should enable the button when the checkbox is checked", async () => {
    //!Destructuring
    const { checkbox, button } = renderComponent();

    //Arrange
    // render(<TermsAndConditions />);

    //Act part
    // const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    //Retorna una promesa, por eso debemos utilizar async /await
    await user.click(checkbox);
    // const button=screen.getByRole("button")
    //Assert part
    expect(button).toBeEnabled();
    screen.debug();
  });
});
