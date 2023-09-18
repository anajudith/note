import React from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../Pages/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = React.useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }
  return children;
};
