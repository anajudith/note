import { Routes as Switch, Route } from "react-router-dom";
import { RequireAuth } from "./assets/context/Auth/RequireAuth";
import Private from "./assets/Pages/PrivateNotes";
import Home from "./assets/Pages/Home";
import Header from "./assets/components/Header";
import { NoteProvider } from "./assets/context/Notes/NotesContext";

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
