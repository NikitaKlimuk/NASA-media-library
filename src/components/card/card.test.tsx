import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from ".";

const mockCardProps = {
  thumbnail: "https://example.com/image.jpg",
  description: "test",
  title: "Universe",
  location: "Space",
  photographer: "NASA",
  nasaID: "123456",
};

describe("Card component", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Card {...mockCardProps} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockCardProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockCardProps.location)).toBeInTheDocument();
    expect(screen.getByText(mockCardProps.photographer)).toBeInTheDocument();
    const listitem = screen.getAllByRole("listitem");
    expect(listitem).toHaveLength(2);
  });
});
