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
import BusinessITCase from "./views/Category-Competition/BusinessITCase";
import AppInnovation from "./views/Category-Competition/AppInnovation";
import Programming from "./views/Category-Competition/Programming";
import SmartDevice from "./views/Category-Competition/SmartDevice";
import CaptureTheFlag from "./views/Category-Competition/CaptureTheFlag";
import GameDevelopment from "./views/Category-Competition/GameDevelopment";
import Register from "./views/Register/Register";
import Footer from "./components/Footer/Footer";
import GoAcademy from "./views/GoAcademy/GoAcademy";
import Login from "./views/Login/Login";
import Logout from "./views/Logout/Logout";
import Dashboard from "./views/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Webinar from "./views/Webinar/Webinar";

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
          <Route path="/businessitcase" component={BusinessITCase} />
          <Route path="/appinnovation" component={AppInnovation} />
          <Route path="/programming" component={Programming} />
          <Route path="/smartdevice" component={SmartDevice} />
          <Route path="/capturetheflag" component={CaptureTheFlag} />
          <Route path="/gamedevelopment" component={GameDevelopment} />
          <Route path="/register" component={Register} />
          <Route path="/goacademy" component={GoAcademy} />
          <Route path="/event" component={Webinar} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </>
    </>
  );
};

export default App;
