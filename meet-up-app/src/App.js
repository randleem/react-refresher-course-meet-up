import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetUpsPage from "./pages/NewMeetUps";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
