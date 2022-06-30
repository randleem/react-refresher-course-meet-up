import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNav() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meet-ups">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
            <span className={classes.badge}>
              {favouritesCtx.totalFavourites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
