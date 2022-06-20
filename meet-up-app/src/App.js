import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
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
          <AllMeetUpsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
