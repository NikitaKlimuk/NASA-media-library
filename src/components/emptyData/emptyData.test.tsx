import { render, screen } from "@testing-library/react";
import EmptyData from ".";

describe("emptyData component", () => {
  it("should render title", () => {
    render(<EmptyData />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
  it("should render images", () => {
    render(<EmptyData />);
    const emptyData = screen.getByRole("img");
    expect(emptyData).toHaveClass("emptyData__images");
  });
});
