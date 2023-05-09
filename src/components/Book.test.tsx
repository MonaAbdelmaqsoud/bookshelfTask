import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Book from "./Book";

describe("testing the bookElement", () => {
  it("testing the Book ifo are shown correctly", () => {
    const bookshelfContent = {
      id: "74XNzF_al3MC",
      title: "Lords of Finance",
      authors: ["Liaquat Ahamed"],
      shelf: "read",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
    };

    render(
      <MemoryRouter>
        <Book book={bookshelfContent} />
      </MemoryRouter>
    );

    const titleElement = screen.getByTestId('book-title');
    expect(titleElement).toHaveTextContent("Lords of Finance");

    const authersElement = screen.getByTestId('book-authors');
    expect(authersElement).toHaveTextContent("Liaquat Ahamed");

    const imageElement = screen.getByTestId('book-image');
    expect(imageElement).toHaveStyle(`background-image:url(http://books.google.com/books/content?id=74XNzF_al3MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api);`);
  });


  it("testing if the book dosen't have authors or image", () => {
    const bookshelfContent = {
      id: "74XNzF_al3MC",
      title: "Lords of Finance",
      shelf: "read",
    };

    render(
      <MemoryRouter>
        <Book book={bookshelfContent} />
      </MemoryRouter>
    );

    const authersElement = screen.getByTestId('book-authors');
    expect(authersElement).toHaveTextContent("no authors");

    const imageElement = screen.getByTestId('book-image');
    expect(imageElement).toHaveStyle(`background-image:url();`);
  });

  
});
