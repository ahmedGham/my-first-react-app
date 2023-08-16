import React, { useState } from "react";
import Book from "./Book";

function BookList({ books }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <React.Fragment>
      <div className="books-list">
        {!showAll
          ? books.slice(0, 16).map((book) => {
              return <Book key={book.id} book={book} />;
            })
          : books.map((book) => {
              return <Book key={book.id} book={book} />;
            })}
      </div>
      <button className="btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "show less" : "show all"}
      </button>
      <div className="loading"></div>
    </React.Fragment>
  );
}

export default BookList;
