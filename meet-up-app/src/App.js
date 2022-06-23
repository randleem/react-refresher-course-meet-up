import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetUpsPage from "./pages/NewMeetUps";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/new-meet-ups">
          <NewMeetUpsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
