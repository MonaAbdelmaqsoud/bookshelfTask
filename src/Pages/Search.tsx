import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import bookType from "../models/book";
import { bookContext } from "../store/book-context";
import { search } from "../util/BooksApi";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { searchResultBooks, setSearchResultBooks, books } =
    useContext(bookContext);

  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      search(searchQuery, 20).then((data: bookType[]) => {
        if (data.length > 0) {
          setSearchResultBooks(data);
        } else {
          setSearchResultBooks([]);
        }
      });
    } else {
      setSearchResultBooks([]);
    }
  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link data-testid="search" to="/" className="close-search">
          Go back to home
        </Link>
        <div className="search-books-input-wrapper">
          <input
            data-testid="input"
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={queryHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResultBooks.length !== 0 ? (
            searchResultBooks.map((book: bookType) => {
              const bookFound = books.find(
                (searchbook: bookType) => searchbook.id === book.id
              );
              if (bookFound) {
                book.shelf = bookFound.shelf;
              }
              return <Book key={book.id} book={book} />;
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
