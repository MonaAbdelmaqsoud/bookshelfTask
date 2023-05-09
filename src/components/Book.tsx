import bookType from "../models/book";
import BookShelfChanger from "./BookShelfChanger";

interface bookInfo {
  book: bookType; 
}
const Book:React.FC<bookInfo> = (props) => {

  const bookImage = props.book.imageLinks;
  const bookTitle = props.book.title;
  const bookAuthors = props.book.authors;

  console.log(props.book);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div data-testid="book-image"
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                // `url(${props.imageLink})`,
                `url(${bookImage? bookImage.thumbnail : ''})`,
            }}
          ></div>
          <BookShelfChanger book={props.book} />
        </div>
        <div data-testid="book-title" className="book-title">{bookTitle}</div>
        <div data-testid="book-authors" className="book-authors">{bookAuthors? bookAuthors : 'no authors'}</div>
      </div>
    </li>
  );
};

export default Book;
