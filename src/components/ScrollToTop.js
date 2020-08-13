import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

const ScrollToTop = (props) => {
	const trackPage = (page) => {
		ReactGA.set({
			page
		});
		ReactGA.pageview(page);
	};
	
	useEffect(() => {
		if (props.history.action === 'POP') {
			return;
		}
		// eslint-disable-next-line react/prop-types
		let hash = props.location.hash;
		if (hash) {
			let element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({block: "start", behavior: "smooth"});
			}
		} else {
			document.getElementById("grommetParent").classList.add("hidden");
			setTimeout(function(){
				document.getElementById("grommetParent").scroll({top: 0, behavior: "smooth"});
				document.getElementById("grommetParent").classList.remove("hidden");
			},300);
			trackPage(props.location.pathname);
		}
	});
	
	return (
		<div/>
	);
};

export default withRouter(ScrollToTop);