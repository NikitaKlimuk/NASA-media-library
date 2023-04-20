import { render, screen } from "@testing-library/react";
import Skeleton from ".";

describe("skeleton component", () => {
  it("should render skeleton", () => {
    render(<Skeleton />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
