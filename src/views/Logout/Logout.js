import React, {useEffect, useState} from "react";

import CheckSession from "../../components/CheckSession";

const Logout = () => {
  const [hasCleared, setHasCleared] = useState(false);
  
  useEffect(() => {
    const ready = async () => await localStorage.clear();
    ready().then(()=> setHasCleared(true));
  }, []);
  
  return hasCleared && <CheckSession redirect/>
};

export default Logout;
