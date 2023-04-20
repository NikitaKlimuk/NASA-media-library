import { render, screen } from "@testing-library/react";
import SkeletonBig from ".";

describe("skeleton component", () => {
  it("should render skeleton", () => {
    render(<SkeletonBig />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
});
