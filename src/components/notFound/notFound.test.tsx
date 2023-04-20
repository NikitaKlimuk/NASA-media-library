import { render, screen } from "@testing-library/react";
import NotFound from ".";

describe("emptyData component", () => {
  it("should render title", () => {
    render(<NotFound />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
  it("should render images with special className", () => {
    render(<NotFound />);
    const notFoundElement = screen.getByTestId("not-found");
    expect(notFoundElement).toHaveClass("notFound__img");
  });
});
