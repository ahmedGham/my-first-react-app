import React from "react";
import { Link } from "react-router-dom";
import welcome_image from "../images/welcome-removebg-preview.png";

const WelcomeSection = () => {
  return (
    <section className="section welcome-section">
      <div className="container">
        <div className="grid-2">
          <div className="coloum coloum-1">
            <div className="welcome-info">
              <h1 className="welcome-title">Great Books</h1>
              <p className="welcome-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, mollitia. Lorem ipsum dolor sit amet consectetur.
              </p>
              <Link to="/books" className="btn btn-welcome">show books</Link>
            </div>
          </div>
          <div className="coloum coloum-2">
            <img src={welcome_image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
