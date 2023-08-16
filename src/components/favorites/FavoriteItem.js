import React from "react";
import { useFavoriteController } from "../CustomHooks/useFavoriteCotroller";

const FavoriteItem = ({ favorite }) => {
  const { removeFavorite } = useFavoriteController();

  const imageURL = favorite.formats["image/jpeg"];
  console.log(12);
  return (
    <article className="favorite" key={favorite.id}>
      <div className="card-image">
        <img src={imageURL} alt="" />
      </div>
      <div>
        <h3>{favorite.title}</h3>
        <p>{favorite.authors[0].name}</p>
      </div>
      <button className="btn" onClick={() => removeFavorite(favorite.id,favorite.docId)}>
        remove
      </button>
    </article>
  );
};

export default FavoriteItem;
