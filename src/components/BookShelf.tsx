import Book from "./Book";
import bookType from "../models/book";
import Shelve from "../models/shelvs";

interface bookshelfContent {
  books: bookType[];
  shelfData: Shelve;
  onChangeShelf: (book: bookType, shelfName: string) => void;
}
const BookShelf: React.FC<bookshelfContent> = (props) => {
  const filteredList = props.books.filter(
    (book: any) => book.shelf === props.shelfData.id
  );

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfData.title}</h2>
      <div className="bookshelf-books">

        <ol className="books-grid">
          {filteredList.map((book: bookType) => (
            <Book key={book.id} book={book} onChangeShelf={props.onChangeShelf} />
          ))}
        </ol>
        
      </div>
    </div>
  );
};

export default BookShelf;
