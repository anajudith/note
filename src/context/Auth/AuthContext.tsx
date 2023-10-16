import React from "react";
import { IAuthContext } from "./Auth.structure";

import { User } from "../../types/User";

import { useApi } from "../../hooks/useApi";

export const AuthContext = React.createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const api = useApi();

  React.useEffect(() => {
    const validadeToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validadeToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validadeToken();
  }, []);

  const singin = async (email: string, password: string) => {
    const data = await api.singin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const singout = async () => {
    setUser(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };
  return (
    <AuthContext.Provider value={{ user, singin, singout }}>
      {children}
    </AuthContext.Provider>
  );
};
