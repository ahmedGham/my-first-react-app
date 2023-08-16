import React, { useState } from "react";
import FavoriteList from "../components/favorites/FavoriteList";

const Favorites = () => {
  return (
    <section className="section favorites-section">
      <div className="container">
        <FavoriteList />
      </div>
    </section>
  );
};

export default Favorites;
