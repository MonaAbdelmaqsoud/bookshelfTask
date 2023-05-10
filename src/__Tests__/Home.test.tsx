import { act, render, screen } from "@testing-library/react";
import HomePage from "../Pages/Home";
import { MemoryRouter } from "react-router-dom";
import SearchPage from "../Pages/Search";
import userEvent from "@testing-library/user-event";

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

  it("testing go to search page button", async () => {
    render(
      <MemoryRouter>
        <HomePage />
        <SearchPage />
      </MemoryRouter>
    );

    const goToSearchLink = screen.getByRole("link", { name: "Search For A book" });
    await act(async () => await userEvent.click(goToSearchLink));
    await act(async () => {
      expect(screen.getByText("Go back to home")).toBeInTheDocument();
    });

  });
})


