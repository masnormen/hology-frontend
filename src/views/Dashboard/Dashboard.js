import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import DashboardWebinar from "./DashboardWebinar";
import DashboardAcademy from "./DashboardAcademy";
import DashboardCompetition from "./DashboardCompetition";

const Dashboard = () => {
  const username = "Participant Hology";
  return (
    <>
      <div className="dashboard-container-full">
        <Header>Hi, {username}</Header>
        <div className="dashboard">
          <div className="sidebar">
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/competition"
            >
              Competition
            </NavLink>
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/academy"
            >
              Academy
            </NavLink>
            <NavLink
              className="sidebar_link"
              activeClassName="sidebar_link--active"
              to="/dashboard/webinar"
            >
              Webinar
            </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route
                exact
                path="/dashboard"
                render={() => <Redirect to="/dashboard/competition" />}
              />
              <Route
                path="/dashboard/webinar"
                render={() => <DashboardWebinar />}
              />
              <Route
                path="/dashboard/academy"
                render={() => <DashboardAcademy />}
              />
              <Route
                path="/dashboard/competition"
                render={() => <DashboardCompetition />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
