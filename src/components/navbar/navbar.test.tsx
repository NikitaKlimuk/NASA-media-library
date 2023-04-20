import { render, screen } from "@testing-library/react";
import Navbar from ".";

describe("navbar component", () => {
  it("should render navbar", () => {
    render(<Navbar />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    const listItems = screen.getAllByRole("list");
    expect(listItems).toHaveLength(2);
  });
});
