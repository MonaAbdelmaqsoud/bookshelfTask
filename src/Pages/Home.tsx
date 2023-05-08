import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import bookType from "../models/book";
import Shelve from "../models/shelvs";

interface homePageData{
  books: bookType[];
  onChangeShelfHandler: (book: any, shelfName: string)=>void;
}

const bookShelfes:Shelve[] = [
  { id: "currentlyReading", title: "Currently Reading" },
  { id: "wantToRead", title: "Want to Read" },
  { id: "read", title: "Read" },
];

const HomePage:React.FC<homePageData> = (props) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {bookShelfes.map((shelf) => (
        <BookShelf key={shelf.id} shelfData={shelf} books={props.books} onChangeShelf={props.onChangeShelfHandler}/>
      ))}
      <div className="open-search">
        <Link to="/search">Search For A book</Link>
      </div>
    </div>
  );
};

export default HomePage;
