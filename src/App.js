import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "normalize.css";
import "./style.css";
import Home from "./views/Home/Home";
import Competition from "./views/Competition/Competition";
import ScrollToTop from "./components/ScrollToTop";
import CategoryCompetition from "./views/Category-Competition/CategoryCompetition";
import Register from "./views/Register/Register";
import "rsuite/dist/styles/rsuite-dark.css";

ReactGA.initialize("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {
  debug: false,
});

const App = () => {
  return (
    <>
      <Helmet
        titleTemplate="%s | BEM FILKOM UB 2020"
        defaultTitle="BEM FILKOM UB 2020 | Elaborasi Makna"
      />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/competition" component={Competition} />
        <Route path="/category" component={CategoryCompetition} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default App;
