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
import Footer from "./components/Footer/Footer";
import GoAcademy from "./views/GoAcademy/GoAcademy";

ReactGA.initialize("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {
  debug: false,
});

const App = () => {
  return (
    <>
      <Helmet
        titleTemplate="%s | BEM FILKOM UB 2020"
        defaultTitle="HOLOGY 3.0"
      />
      <>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/competition" component={Competition} />
          <Route exact path="/category" component={CategoryCompetition} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/goacademy" component={GoAcademy} />
        </Switch>
        <Footer />
      </>
    </>
  );
};

export default App;
