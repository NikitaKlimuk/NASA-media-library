import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("footer component", () => {
  it("should render footer", () => {
    render(<Footer />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    const listItems = screen.getAllByRole("list");
    expect(listItems).toHaveLength(2);
  });
});
