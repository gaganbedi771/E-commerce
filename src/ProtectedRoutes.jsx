import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login"></Navigate>;
  }

  return props.children;
};

export default ProtectedRoutes;
