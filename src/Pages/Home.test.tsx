import { render, screen } from "@testing-library/react";
import HomePage from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("home page tests", ()=>{
  it("testing home page", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  
    const element = screen.getByText("MyReads");
    expect(element).toBeInTheDocument;
  });

  it("testing that shelves are mapped correctly", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  
    const element = screen.getByTestId('shelves');
    expect(element.childElementCount).toBe(3);
  });
})


