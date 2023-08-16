import React from "react";
import { useFavoriteController } from "../CustomHooks/useFavoriteCotroller";
import FavoriteItem from "./FavoriteItem";

const FavoriteList = () => {
  const { favorites, removeAllFavorites } = useFavoriteController();
  return (
    <div className="favorite-list">
      {favorites.map((favorite) => {
        return <FavoriteItem key={favorite.id} favorite={favorite} />;
      })}
      <div>
        <button className="btn" onClick={removeAllFavorites}>
          Remove All
        </button>
      </div>
    </div>
  );
};

export default FavoriteList;
