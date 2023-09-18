import React from "react";
import { Routes as Switch, Route, Link } from "react-router-dom";
import { RequireAuth } from "./assets/context/Auth/RequireAuth";
import Private from "./assets/Pages/Private";
import Home from "./assets/Pages/Home";
import { AuthContext } from "./assets/context/Auth/AuthContext";

export default function Routes() {
  const auth = React.useContext(AuthContext);

  const handleLogout = async () => {
    await auth.singout();
    window.location.href = "/";
  };
  return (
    <>
      {/* <h1>Todos tem esse texto</h1> */}
      <nav className="p-2 gap-4 flex border border-b-black hover:no-underline text-center justify-evening">
        <Link to="/">Home</Link>
        <Link to="/private">Minhas Anotações</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
      <Switch>
        {/* pagina privada */}
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
              {/* // criar uma pasta routes que vão ter as rotas privadas na intenção de deixar bem arquiteturado.s */}
            </RequireAuth>
          }
        />

        <Route path="/" element={<Home />} />
      </Switch>
    </>
  );
}
