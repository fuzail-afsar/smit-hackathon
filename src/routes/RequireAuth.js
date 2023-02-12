import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserProfile, isUserLoggedIn } from "../services/firebase/auth";

const RequireAuth = (props) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    (async () => {
      try {
        if (await isUserLoggedIn()) {
          setIsLoggedIn(getUserProfile());
          console.log("sss");
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return isLoggedIn ? (
    props.children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
