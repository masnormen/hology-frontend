import React from "react";
import {Redirect} from "react-router";
import {invalidateSession} from "./SessionHelper";


// eslint-disable-next-line react/prop-types
const CheckSession = ({loggedOut = false, redirect = false, children = null}) => {
  let hasToken = localStorage.getItem("ho_dXNlcl9zZXNzaW9u")
    && localStorage.getItem("ho_dXNlcl9yZWZyZXNo")
    && localStorage.getItem("ho_dXNlcl9kYXRh")
    && Date.now() < localStorage.getItem("ho_dGltZXN0YW1w") * 1000;
  
  if (!loggedOut && !hasToken) {
    if (redirect) {
      invalidateSession();
      return <Redirect to="/login"/>;
    }
    return null;
  } else if (loggedOut && hasToken) {
    if (redirect) return <Redirect to="/dashboard"/>;
    return null;
  }
  if (children) return children;
  return null;
};

export default CheckSession;
