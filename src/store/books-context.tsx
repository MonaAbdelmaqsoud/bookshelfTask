import React, { useState, useEffect } from "react";
import { getAll, search, update } from "../util/BooksApi";
import bookType from "../models/book";

type BooksContextObj = {
  books: bookType[];
  searchQueryHandler: (query: string) => void;
  searchResultBooks: bookType[];
  changeShelfHandler: (book: any, shelfName: string) => void;
};

export const booksContext = React.createContext<BooksContextObj>({
  books: [],
  searchQueryHandler: () => {},
  searchResultBooks: [],
  changeShelfHandler: () => {},
});

interface providerProps {
  children?: React.ReactNode;
}

//the context provider
const BooksContextProvider: React.FC<providerProps> = (props) => {
  const [books, setBooks] = useState<bookType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultBooks, setSearchResultBooks] = useState<bookType[]>([]);

  useEffect(() => {
    getAll().then((data: bookType[]) => {
      setBooks(data);
    });
  }, []);


  //the shelf changer function
  const changeShelfHandler = (book: bookType, shelfName: string) => {
    let updatedBooks: bookType[] = [...books];

    //first check if the book exists in the books state
    const bookExist = books.find(
      (searchbook: bookType) => searchbook.id === book.id
    );

    //if it exists, just changing it's shelf
    if (bookExist) {
      updatedBooks = books.map((bookItem: bookType) => {
        if (bookItem.id === book.id) {
          book.shelf = shelfName;
        }
        return bookItem;
      });
    }
    //if it doesn't, adding the shelf field then adding the whole book to books
    else {
      const newBook = { ...book, shelf: shelfName };
      updatedBooks.push(newBook);
    }
    setBooks(updatedBooks);
    update(book, shelfName);
  };

  // the search functionality
  const searchQueryHandler = (query: string) => {
    setSearchQuery(query);
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

  const contaxtValue: BooksContextObj = {
    books: books,
    changeShelfHandler: changeShelfHandler,
    searchResultBooks: searchResultBooks,
    searchQueryHandler: searchQueryHandler
  };
  return (
    <booksContext.Provider value={contaxtValue}>
      {props.children}
    </booksContext.Provider>
  );
};

export default BooksContextProvider;
