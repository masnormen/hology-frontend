const setUserData = (userData, accessToken = null, refreshToken = null) => {
  localStorage.setItem("ho_dXNlcl9kYXRh", btoa(JSON.stringify(userData)));
  if (accessToken != null) {
    localStorage.setItem("ho_dXNlcl9zZXNzaW9u", accessToken);
    let exp = JSON.parse(atob(accessToken.split('.')[1])).exp;
    localStorage.setItem("ho_dGltZXN0YW1w", exp);
  }
  if (refreshToken != null) localStorage.setItem("ho_dXNlcl9yZWZyZXNo", refreshToken);
};

const getUser = () => {
  if (Date.now() > localStorage.getItem("ho_dGltZXN0YW1w") * 1000) {
    invalidateSession();
    return {}
  }
  try {
    return JSON.parse(atob(localStorage.getItem("ho_dXNlcl9kYXRh")))
  }
  catch (e) {
    return {};
  }
}

const getUserData = getUser();

const getAccessToken = localStorage.getItem("ho_dXNlcl9zZXNzaW9u");

const getRefreshToken = localStorage.getItem("ho_dXNlcl9yZWZyZXNo");

const invalidateSession = () => localStorage.clear();

export {setUserData, getUserData, getAccessToken, getRefreshToken, invalidateSession};
