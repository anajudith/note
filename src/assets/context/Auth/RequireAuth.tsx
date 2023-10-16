import React from "react";
import { AuthContext } from "./AuthContext";
// import Login from "../../Pages/Login";
import ModalLogin from "../../components/ModalLogin";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = React.useContext(AuthContext);

  const [isOpen] = React.useState(false);

  if (!auth.user) {
    return <ModalLogin isOpen={isOpen} />;
  }
  return children;
};
