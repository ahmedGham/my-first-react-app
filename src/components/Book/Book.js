import React from "react";
import { useFavoriteController } from "../CustomHooks/useFavoriteCotroller";

const Book = ({ book }) => {
  const { addFavorite } = useFavoriteController();
  return (
    <article className="book-card">
      <div className="card-image">
        <img src={book.formats["image/jpeg"]} alt="" />
      </div>
      <div className="card-info">
        <h4>
          {book.title.length > 30
            ? `${book.title.substring(0, 30)}...`
            : book.title}
        </h4>
        <p className="author-name">{book.authors[0].name}</p>
      </div>
      <button className="btn" onClick={() => addFavorite(book)}>
        add
      </button>
    </article>
  );
};

export default Book;
