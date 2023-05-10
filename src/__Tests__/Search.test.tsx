import { act, fireEvent, render, screen} from "@testing-library/react";
import { MemoryRouter} from "react-router-dom";
import SearchPage from "../Pages/Search";
import HomePage from "../Pages/Home";
import userEvent from "@testing-library/user-event";
import { bookContext } from "../store/book-context";
import bookType from "../models/book";

const books: bookType[] = [];
const setBooks = ([]) => {};
const searchResultBooks: bookType[] = [
  { title: "book1", id: "b1", shelf: "currentlyReading" },
  { title: "book2", id: "b2", shelf: "read" },
];
const setSearchResultBooks = ([]) => {};

describe("testing the search page", () => {
  it("testing the output if no data was received", () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const titleElement = screen.getByText("No Books Found");
    expect(titleElement).toBeInTheDocument;
  });

  it("testing go to home button", async () => {
    render(
      <MemoryRouter>
        <HomePage />
        <SearchPage />
      </MemoryRouter>
    );

    const goToHomLink = screen.getByRole("link", { name: "Go back to home" });
    await act(async () => await userEvent.click(goToHomLink));
    await act(async () => {
      expect(screen.getByText("MyReads")).toBeInTheDocument();
    });
  });

  it("testing the received data from context are rendered based on the shelf name", () => {
    render(
      <MemoryRouter>
        <bookContext.Provider
          value={{ books, setBooks, searchResultBooks, setSearchResultBooks }}
        >
          <SearchPage />
        </bookContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByRole("list").childElementCount).toBe(2);
  });

  it("testing that the input element has the correct entered query ",()=>{
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    const inputElement = screen.getByTestId("input") as HTMLInputElement;
    fireEvent.change(inputElement,{target:{value: 'horror'}});
    expect(inputElement.value).toBe("horror");
  })

});
