import Book from "./Book";
import bookType from "../models/book";
import Shelve from "../models/shelvs";
import { useContext } from "react";
import { bookContext } from "../store/book-context";

interface bookshelfContent {
  shelfData: Shelve;
}
const BookShelf: React.FC<bookshelfContent> = (props) => {

  const {books} = useContext(bookContext);

  const filteredList = books.filter(
    (book: bookType) => book.shelf === props.shelfData.id
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfData.title}</h2>
      <div className="bookshelf-books">

        <ol className="books-grid">
          {filteredList.map((book: bookType) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
        
      </div>
    </div>
  );
};

export default BookShelf;
