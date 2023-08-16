import React, { useEffect, useState } from "react";
import BookList from "../components/Book/BookList";
import Loading from "../components/UI/Loading";

const url = "https://gutendex.com/books/";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const data = (await response.json()).results;
        setBooks(data);
        console.log(data);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      setIsError(true);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (isLoading) {
    return (
      <section className="section books-section">
        <div className="container">
          <Loading/>
        </div>
      </section>
    );
  }

  return (
    <section className="section books-section">
      <div className="container">
        <BookList books={books} />
      </div>
    </section>
  );
};

export default Books;
