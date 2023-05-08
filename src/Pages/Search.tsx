import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import bookType from "../models/book";
import { booksContext } from "../store/books-context";

const SearchPage: React.FC = () => {
  const booksCtx = useContext(booksContext);
  
  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    booksCtx.searchQueryHandler(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Go back to home
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={queryHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksCtx.searchResultBooks.length !== 0 ? (
            booksCtx.searchResultBooks.map((book: bookType) => {
              const bookFound = booksCtx.books.find(
                (searchbook: bookType) => searchbook.id === book.id
              );

              if (bookFound) {
                book.shelf = bookFound.shelf;
              }
              return (
                <Book
                  key={book.id}
                  book={book}
                />
              );
            })
          ) : (
            <div>No Books Found</div>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
