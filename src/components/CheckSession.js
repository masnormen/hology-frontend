import React from "react";
import {Redirect} from "react-router";

// eslint-disable-next-line react/prop-types
const CheckSession = ({loggedOut = false, redirect = false, children = null}) => {
	let hasToken = localStorage.getItem('hology_user_session')
		&& localStorage.getItem('hology_user_ref')
		&& localStorage.getItem('hology_user_data');
	
	if (!loggedOut && !hasToken) {
		if (redirect) return <Redirect to="/login"/>
		return null;
	} else if (loggedOut && hasToken) {
		if (redirect) return <Redirect to="/"/>
		return null;
	}
	if (children) return children;
	return null;
};

export default CheckSession;
