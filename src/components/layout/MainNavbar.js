import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function MainNavbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    const oldActive = document.querySelector(".active");
    oldActive?.classList.remove("active");

    const openLink = [...document.querySelectorAll(".navbar a")].find(
      (link) => {
        return link.getAttribute("href") === pathname;
      }
    );
    openLink.classList.add("active");
    });

  return (
    <header className="header">
      <div className="navbar">
        <div className="container">
          {/* <div className="logo">
            <h1>Books</h1>
          </div> */}
          <div>
            <nav>
              <ul className="link-list">
                <li>
                  <Link to="/" className="link" >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/books" className="link" >
                    Books
                  </Link>
                </li>
                <li>
                  <Link to="/favorites" className="link" >
                    Favorite
                  </Link>
                </li>
                <li>
                  <Link to="/questions" className="link" >
                    Questions
                  </Link>
                </li>
                <li>
                  <Link to="/hire-me" className="link" >
                    Hire me
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavbar;
