import bookType from "../models/book";
import BookShelfChanger from "./BookShelfChanger";

interface bookInfo {

  book: bookType; 
  onChangeShelf: (book: bookType, shelfName: string) => void;
}
const Book:React.FC<bookInfo> = (props) => {

  const bookImage = props.book.imageLinks;
  const bookTitle = props.book.title;
  const bookAuthors = props.book.authors;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                // `url(${props.imageLink})`,
                `url(${bookImage? bookImage.thumbnail : ''})`,
            }}
          ></div>
          <BookShelfChanger book={props.book} onChangeShelf={props.onChangeShelf}/>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors? bookAuthors : 'no authors'}</div>
      </div>
    </li>
  );
};

export default Book;
