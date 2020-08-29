import {useEffect} from "react";
import ReactGA from "react-ga";
import {withRouter} from "react-router-dom";

const trackPage = (page) => {
	ReactGA.set({
		page
	});
	ReactGA.pageview(page);
};

const ScrollToTop = (props) => {
	const trackPage = (page) => {
		ReactGA.set({
			page
		});
		ReactGA.pageview(page);
	};
	
	useEffect(() => {
		if (props.history.action === "POP") {
			return;
		}
		let hash = props.location.hash;
		if (hash) {
			let element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({block: "start", behavior: "smooth"});
			}
		} else {
			window.scroll({top: 0, behavior: "smooth"});
			trackPage(props.location.pathname);
		}
	});
	
	return null;
};

export default withRouter(ScrollToTop);
