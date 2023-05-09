import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import Shelve from "../models/shelvs";
import { getAll } from "../util/BooksApi";
import bookType from "../models/book";
import { bookContext } from "../store/book-context";



const bookShelfes:Shelve[] = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];

const HomePage:React.FC = () => {
  const {setBooks} = useContext(bookContext)

  useEffect(() => {
    getAll().then((data: bookType[]) => {
      setBooks(data);
    });
  }, []);
  

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {bookShelfes.map((shelf) => (
        <BookShelf key={shelf.id} shelfData={shelf} />
      ))}
      <div className="open-search">
        <Link to="/search">Search For A book</Link>
      </div>
    </div>
  );
};

export default HomePage;
