import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./private";

import SignIn from "../pages/sign-in/";
import Register from "../pages/register";
import Profile from "../pages/profile";
import Anime from "../pages/animes";
import Welcome from "../pages/welcome";
import Erro404 from "../pages/404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={Register} />
        <PrivateRoute exact path="/welcome/:tmdb" component={Welcome} />
        <PrivateRoute exact path="/anime/:nome" component={Anime} />
        <PrivateRoute exact path="/:username" component={Profile} />
        <Route component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}
