import "./App.css";
import { useEffect, useState } from "react";
import SearchPage from "./Pages/Search";
import HomePage from './Pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { search, getAll, update } from "./util/BooksApi";
import bookType from "./models/book";
import React from "react";

function App() {
  //the managed states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResultBooks, setSearchResultBooks] = useState<bookType[]>([]);
  const [books, setBooks] = useState<bookType[]>([]);

  //////////////////////////////////////////////////////////

  //getting all books from api once the component renders
  useEffect(() => {
    const getAllBooks = async () => {
      const BooksList = await getAll().then((data: bookType[]) => { 
          setBooks(data);
      });
      return BooksList;
    };
    getAllBooks();
  }, []);

  ///////////////////////////////////////////////////////////

  //handling the shelf change function
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

  /////////////////////////////////////////////////////////////
  const searchQueryHandler = (query: string) => {
    setSearchQuery(query);
  };

  //the search handling function
  useEffect(() => {
    if (searchQuery) {
      search(searchQuery, 20).then((data: bookType[]) => {
        if (data.length > 0) {
          setSearchResultBooks(data);
        }else{
          setSearchResultBooks([]);
        }})
    }else{
      setSearchResultBooks([]);
    }
    
  }, [searchQuery]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage books={books} onChangeShelfHandler={changeShelfHandler} />
      ),
    },
    {
      path: "/search",
      element: (
        <SearchPage
          books={books}
          searchResult={searchResultBooks}
          onSearch={searchQueryHandler}
          onChangeShelfHandler={changeShelfHandler}
        />
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
