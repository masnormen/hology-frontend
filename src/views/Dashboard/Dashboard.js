import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import DashboardWebinar from "./DashboardWebinar";
import DashboardAcademy from "./DashboardAcademy";
import DashboardCompetition from "./DashboardCompetition";
import {getUserData} from "../../components/SessionHelper";
import CheckSession from "../../components/CheckSession";
import Helmet from "react-helmet";
import Paragraph from "../../components/Paragraph/Paragraph";

const Dashboard = () => {
  return (
    <CheckSession redirect>
      <Helmet>
        <title>Competition</title>
      </Helmet>
      <div className="dashboard-container-full">
        <Header>Hai, {getUserData.user_fullname}</Header>
        <br/>
        <Paragraph>
          Email &rarr; {getUserData.user_email}
        </Paragraph>
        <Paragraph>
          Tanggal lahir &rarr; {new Date(getUserData.user_birthdate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </Paragraph>
        <Paragraph>
          Gender &rarr; {getUserData.user_gender === 1 ? "Perempuan" : "Laki-laki"}
        </Paragraph>
        <Paragraph>
          Tim &rarr; {getUserData.teams.map((item, index) => {
            if (index === 0) return item.team_name;
            return ", " + item.team_name;
          })}
        </Paragraph>
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
    </CheckSession>
  );
};

export default Dashboard;
