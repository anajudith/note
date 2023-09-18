import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { InputLogin } from "../../components";

export default function Login() {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.singin(email, password);
      if (isLogged) {
        navigate("/private");
      } else {
        alert("Não deu certo");
      }
    }
  };

  return (
    <>
      <div className="w-[full] min-h-full flex flex-col justify-center items-center text-center px-6 py-12 lg:px-8">
        {/* <div className="w-[20%] flex flex-col justify-center content-center text-center gap-2"> */}
        <h1 className="text-center">Página login</h1>
        <div className="w-[25%]">
          <InputLogin
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
          />
          <InputLogin
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            type="submit"
            className="flex mt-[20px] w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logar
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
