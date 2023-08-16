import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase-config";

const favoritesContext = React.createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorite] = useState([]);

  const favoriteCollectionRef = collection(db, "favorite_books");

  const removeFavorited = async (id) => {
    const favoriteDoc = doc(db, "favorite_books", id);
    await deleteDoc(favoriteDoc);
  };

  const removeFavorite = function (id, docId) {
    removeFavorited(docId).then(() => {
      // const newFavorites = favorites.filter((book) => book.id !== id);
      // setFavorite(newFavorites);
      getFavorites();
    });
    console.log(favorites);
  };
  const addFavorite = (newFavorite) => {
    if (!favorites.find((favorite) => favorite.id === newFavorite.id)) {
      setFavorite([...favorites, newFavorite]);
      uploadFavorite(newFavorite);
    }
    getFavorites();
  };

  const removeAllFavorites = function () {
    favorites.forEach((favorite) => {
      removeFavorite(favorite.id, favorite.docId);
    });
  };

  const uploadFavorite = async (newFavorite) => {
    await addDoc(favoriteCollectionRef, newFavorite);
  };

  const getFavorites = async () => {
    const data = await getDocs(favoriteCollectionRef);
    setFavorite(data.docs.map((doc) => ({ ...doc.data(), docId: doc.id })));
    console.log(favorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <favoritesContext.Provider
      value={{ removeFavorite, removeAllFavorites, addFavorite, favorites }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export const useFavoriteController = () => {
  return useContext(favoritesContext);
};

export { FavoriteProvider };
