import React from "react";
import bookType from "../models/book";

interface bookInfo {
  book: bookType; 
  onChangeShelf: (book: bookType, shelfName: string) => void;
}

const BookShelfChanger:React.FC<bookInfo> = (props) => {
  
  const shelfChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeShelf(props.book, event.target.value);
  }

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
