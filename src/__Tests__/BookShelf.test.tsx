import { render, screen } from "@testing-library/react";
import BookShelf from "../components/BookShelf";
import { MemoryRouter } from "react-router-dom";
import { bookContext } from "../store/book-context";
import bookType from "../models/book";

const books: bookType[] = [
  { title: "book1", id: "b1", shelf: "currentlyReading" },
  { title: "book2", id: "b2", shelf: "read" },
];
const setBooks = ([]) => {};
const searchResultBooks: any = [];
const setSearchResultBooks = ([]) => {};

const bookShelfes = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];
describe("testing the shelves are rendring correctly", () => {
  it("testing home page", () => {
    render(
      <MemoryRouter>
        <BookShelf shelfData={bookShelfes[2]} />
      </MemoryRouter>
    );

    const element = screen.getByRole("heading", { name: "Read" });
    expect(element).toBeInTheDocument;
  });

  it("testing the received data from context are rendered based on the shelf name", () => {
    render(
      <bookContext.Provider
        value={{ books, setBooks, searchResultBooks, setSearchResultBooks }}
      >
        <BookShelf shelfData={bookShelfes[0]} />
      </bookContext.Provider>
    );

    expect(screen.getByRole("list").childElementCount).toBe(1);
  });
});
