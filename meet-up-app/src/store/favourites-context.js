import { createContext, useState } from "react";
//initla context value
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {
  //updated contect value
  const [userFavourites, setUserFavourites] = useState([]);

  function handleAddFavourites(favouriteMeetup) {
    //As doenst update automatically - may not be the latest version,
    //if you use a callback function then you are guaranteed to always get
    //the lastest version of state
    setUserFavourites((prevUserFavourites) => {
      //concat returns an array
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }

  function handleremoveFavourites(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function handleItemIsFavourite(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: handleAddFavourites,
    removeFavourite: handleremoveFavourites,
    itemIsFavourite: handleItemIsFavourite,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
