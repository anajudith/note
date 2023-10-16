import { Routes as Switch, Route } from "react-router-dom";
import { RequireAuth } from "./context/Auth/RequireAuth";
import Private from "./Pages/PrivateNotes";
import Home from "./Pages/Home";
import Header from "./components/Header";
import { NoteProvider } from "./context/Notes/NotesContext";

export default function Routes() {
  return (
    <div className="">
      <Header />
      <Switch>
        {/* pagina privada */}
        <Route
          path="/private"
          element={
            <RequireAuth>
              <NoteProvider>
                <Private />
              </NoteProvider>

              {/* // criar uma pasta routes que vão ter as rotas privadas na intenção de deixar bem arquiteturado.s */}
            </RequireAuth>
          }
        />

        <Route path="/" element={<Home />} />
      </Switch>
    </div>
  );
}
