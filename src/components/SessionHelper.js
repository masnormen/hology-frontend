import jwt_decode from "jwt-decode";

const invalidateSession = () => localStorage.clear();

const setUserData = (userData, accessToken = null, refreshToken = null) => {
  localStorage.setItem("ho_dXNlcl9kYXRh", btoa(encodeURIComponent(JSON.stringify(userData)).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
    return String.fromCharCode("0x" + p1);
  })));
  if (accessToken != null) {
    localStorage.setItem("ho_dXNlcl9zZXNzaW9u", accessToken);
    let exp = jwt_decode(accessToken).exp;
    localStorage.setItem("ho_dGltZXN0YW1w", exp);
  }
  if (refreshToken != null) localStorage.setItem("ho_dXNlcl9yZWZyZXNo", refreshToken);
};

const getUser = () => {
  if (localStorage.getItem("ho_dGltZXN0YW1w") == null) {
    return {};
  } else if (Date.now() > localStorage.getItem("ho_dGltZXN0YW1w") * 1000) {
    alert("Your session is expired. Please login again.");
    invalidateSession();
    return {};
  } else {
    try {
      return JSON.parse(decodeURIComponent(atob(localStorage.getItem("ho_dXNlcl9kYXRh")).split("").map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join("")));
    } catch (e) {
      return {};
    }
  }
};

const getUserData = getUser();

const getAccessToken = localStorage.getItem("ho_dXNlcl9zZXNzaW9u");

const getRefreshToken = localStorage.getItem("ho_dXNlcl9yZWZyZXNo");

export {setUserData, getUserData, getAccessToken, getRefreshToken, invalidateSession};
