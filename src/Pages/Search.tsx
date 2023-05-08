import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import bookType from "../models/book";

interface searchData {
  onSearch: (query: string) => void;
  searchResult: bookType[];
  onChangeShelfHandler: (book: any, shelfName: string) => void;
  books: bookType[];
}

const SearchPage: React.FC<searchData> = (props) => {
  
  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(event.target.value);
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
          {props.searchResult.length !== 0 ? (
            props.searchResult.map((book: bookType) => {
              const bookFound = props.books.find(
                (searchbook: bookType) => searchbook.id === book.id
              );

              if (bookFound) {
                book.shelf = bookFound.shelf;
              }
              return (
                <Book
                  key={book.id}
                  book={book}
                  onChangeShelf={props.onChangeShelfHandler}
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
