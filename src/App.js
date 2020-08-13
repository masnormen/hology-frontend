import React from "react";
import {Route, Switch} from "react-router-dom";
import {Grommet} from "grommet";
import {Helmet} from "react-helmet";
import ReactGA from "react-ga";
import {deepMerge} from "grommet/utils";

import {elmaTheme} from "./elma-theme";
import {grommet} from "grommet/themes";

import "normalize.css";
import "./style.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

// import ComingSoon from "./views/ComingSoon";

//merge default theme and BEM theme
const bemTheme = deepMerge(grommet, elmaTheme);

ReactGA.initialize("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {debug: false});

const App = () => {
	return (
		<>
			<Helmet titleTemplate="%s | BEM FILKOM UB 2020" defaultTitle="BEM FILKOM UB 2020 | Elaborasi Makna"/>
			<Grommet theme={bemTheme} full id="grommetParent">
				<ScrollToTop/>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
				</Switch>
				<Footer/>
			</Grommet>
		</>
	);
};

export default App;
