import bookType from "../models/book";
import React, { useState } from "react";

type BooksContextObj = {
  books: bookType[];
  setBooks: (books: bookType[]) => void;
  searchResultBooks: bookType[];
  setSearchResultBooks: (books: bookType[]) => void;
  

};

export const bookContext = React.createContext<BooksContextObj>({
  books: [],
  setBooks: ([]) => {},
  searchResultBooks: [],
  setSearchResultBooks:([])=>{},

});

interface providerProps {
  children?: React.ReactNode;
}

//the context provider
const BookContextProvider: React.FC<providerProps> = (props) => {
  const [books, setBooks] = useState<bookType[]>([]);
  const [searchResultBooks, setSearchResultBooks] = useState<bookType[]>([]);

  const contaxtValue: BooksContextObj = {
    books,
    searchResultBooks,
    setBooks,
    setSearchResultBooks,


  };
  return (
    <bookContext.Provider value={contaxtValue}>
      {props.children}
    </bookContext.Provider>
  );
};

export default BookContextProvider;
