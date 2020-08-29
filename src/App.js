import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

import "normalize.css";
import "./style.css";

// Import Components and Views
import Home from "./views/Home/Home";
import Competition from "./views/Competition/Competition";
import ScrollToTop from "./components/ScrollToTop";
import CategoryCompetition from "./views/Category-Competition/CategoryCompetition";
import Register from "./views/Register/Register";
import Footer from "./components/Footer/Footer";
import GoAcademy from "./views/GoAcademy/GoAcademy";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

ReactGA.initialize("UA-38735593-5", {
  debug: true,
});

const App = () => {
  return (
    <>
      <Helmet titleTemplate="%s | HOLOGY 3.0" defaultTitle="HOLOGY 3.0" />
      <>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/competition" component={Competition} />
          <Route path="/category" component={CategoryCompetition} />
          <Route path="/register" component={Register} />
          <Route path="/goacademy" component={GoAcademy} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </>
    </>
  );
};

export default App;
