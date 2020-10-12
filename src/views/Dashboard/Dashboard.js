import React from "react";
import "./Dashboard.scss";
import Header from "../../components/Header/Header";
import {Route, Switch, Redirect, NavLink} from "react-router-dom";
import DashboardWebinar from "./DashboardWebinar";
import DashboardAcademy from "./DashboardAcademy";
import DashboardCompetition from "./DashboardCompetition";
import DashboardEditProfile from "./DashboardEditProfile";
import {getUserData} from "../../components/SessionHelper";
import CheckSession from "../../components/CheckSession";
import Helmet from "react-helmet";
import Paragraph from "../../components/Paragraph/Paragraph";

const Dashboard = () => {
  return (
    <CheckSession redirect>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="dashboard-container-full">
        <Header>Hai, {getUserData.user_fullname}</Header>
        <br/>
        <Paragraph>Email &rarr; {getUserData.user_email}</Paragraph>
        <Paragraph>
          Tanggal lahir &rarr;{" "}
          {new Date(getUserData.user_birthdate).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Paragraph>
        <Paragraph>
          Gender &rarr;{" "}
          {getUserData.user_gender === "1" ? "Perempuan" : "Laki-laki"}
        </Paragraph>
        <Paragraph>
          Tim &rarr;{" "}
          {getUserData.teams != null &&
          getUserData.teams.map((item, index) => {
            if (index === 0) return item.team_name;
            return ", " + item.team_name;
          })}
        </Paragraph>
        <Paragraph>
          <NavLink style={{color: "#FFFFFF"}} to="/dashboard/editprofile">
            Sunting Profil
          </NavLink>
        </Paragraph>
        <br/>
        <Paragraph>
          PENGUMUMAN (11/10/2020): Semua tim batch 2 yang belum terverifikasi persyaratan berkasnya sampai akhir periode batch 2 akan
          dihapus secara otomatis oleh sistem. Segera lengkapi verifikasi berkas Anda.
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
                render={() => <Redirect to="/dashboard/competition"/>}
              />
              <Route
                path="/dashboard/webinar"
                render={() => (
                  <DashboardWebinar/>
                )}
              />
              <Route
                path="/dashboard/academy"
                render={() => <DashboardAcademy/>}
              />
              <Route
                path="/dashboard/competition"
                render={() => <DashboardCompetition/>}
              />
              <Route
                path="/dashboard/editprofile"
                render={() => <DashboardEditProfile/>}
              />
            </Switch>
          </div>
        </div>
      </div>
    </CheckSession>
  );
};

export default Dashboard;
