import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import { AuthProvider } from "./context/Auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
