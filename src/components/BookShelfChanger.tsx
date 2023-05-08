import React, {useContext} from "react";
import bookType from "../models/book";
import { booksContext } from "../store/books-context";

interface bookInfo {
  book: bookType; 
}

const BookShelfChanger:React.FC<bookInfo> = (props) => {

  const booksCtx = useContext(booksContext);
  
  const shelfChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    booksCtx.changeShelfHandler(props.book, event.target.value);
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
