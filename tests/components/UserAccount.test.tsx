import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  test("should render user name", () => {
    const user: User = { id: 1, name: "Zelda" };
    render(<UserAccount user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
    //screen.debug();
  });

  it("should render edit button if user is admin", () => {
    const user: User = { id: 2, name: "Link", isAdmin: true };
    render(<UserAccount user={user} />);
    //In this case "getbytext" can work, but is not a good practice
    //expect(screen.getByText(/edit/i)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
    screen.debug();
  });
  test("should not render edit button if user is not admin", () => {
    const user: User = { id: 2, name: "Link", isAdmin: false };
    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();

    screen.debug();
  });
});
