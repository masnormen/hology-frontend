import jwt_decode from "jwt-decode";

const invalidateSession = () => localStorage.clear();

const setUserData = (userData, accessToken = null, refreshToken = null) => {
  localStorage.setItem("ho_dXNlcl9kYXRh", btoa(JSON.stringify(userData)));
  if (accessToken != null) {
    localStorage.setItem("ho_dXNlcl9zZXNzaW9u", accessToken);
  }
  if (refreshToken != null) localStorage.setItem("ho_dXNlcl9yZWZyZXNo", refreshToken);
};

const getUser = () => {
  try {
    return JSON.parse(atob(localStorage.getItem("ho_dXNlcl9kYXRh")));
  } catch (e) {
    return {};
  }
};

const getUserData = getUser();

const getAccessToken = localStorage.getItem("ho_dXNlcl9zZXNzaW9u");

const getRefreshToken = localStorage.getItem("ho_dXNlcl9yZWZyZXNo");

export {setUserData, getUserData, getAccessToken, getRefreshToken, invalidateSession};
