import React, {useEffect, useState} from "react";

import CheckSession from "../../components/CheckSession";

const Logout = () => {
  const [hasCleared, setHasCleared] = useState(false);
  
  useEffect(() => {
    let hasToken = localStorage.getItem("ho_dXNlcl9zZXNzaW9u")
      && localStorage.getItem("ho_dXNlcl9yZWZyZXNo")
      && localStorage.getItem("ho_dXNlcl9kYXRh");
    
    if (hasToken) {
      const ready = async () => await localStorage.clear();
      ready().then(() => setHasCleared(true));
      window.location.reload();
    }
    setHasCleared(true)
  }, []);
  
  return hasCleared && <CheckSession redirect/>;
};

export default Logout;
