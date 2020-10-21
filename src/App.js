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
// import GoAcademy from "./views/GoAcademy/GoAcademy";
import Login from "./views/Login/Login";
import Logout from "./views/Logout/Logout";
import Dashboard from "./views/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Webinar from "./views/Webinar/Webinar";
import Invitation from "./views/Invitation/Invitation";
import ForgotPass from "./views/Login/ForgotPass";
import NewPass from "./views/Login/NewPass";
import MediaPartner from "./components/media/MediaPartner";

ReactGA.initialize("UA-38735593-5", {
  debug: false,
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

          <Route exact path="/competition" component={Competition} />
          <Route
            path="/competition/businessitcase"
            component={BusinessITCase}
          />
          <Route path="/competition/appinnovation" component={AppInnovation} />
          <Route path="/competition/programming" component={Programming} />
          <Route path="/competition/smartdevice" component={SmartDevice} />
          <Route
            path="/competition/capturetheflag"
            component={CaptureTheFlag}
          />
          <Route
            path="/competition/gamedevelopment"
            component={GameDevelopment}
          />

          <Route path="/webinar" component={Webinar} />
          {/* <Route path="/goacademy" component={GoAcademy} /> */}

          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPass} />
          <Route path="/forgot-password/:token" component={NewPass} />
          <Route path="/logout" component={Logout} />

          <Route path="/invitation/:token" component={Invitation} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <MediaPartner />
        <Footer />
      </>
    </>
  );
};

export default App;
