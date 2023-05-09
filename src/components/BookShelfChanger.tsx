import React, {useContext, useState} from "react";
import bookType from "../models/book";

import { bookContext } from "../store/book-context";
import { update } from "../util/BooksApi";

interface bookInfo {
  book: bookType; 
}

const BookShelfChanger:React.FC<bookInfo> = (props) => {

  const {books, setBooks} = useContext(bookContext);
  
  const shelfChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeShelfHandler(props.book, event.target.value);
  }


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
          return book;
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

  return (
    <div className="book-shelf-changer">
      <select data-testid="select" value={props.book.shelf ? props.book.shelf :"none"} onChange={shelfChangeHandler}>
        <option disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
