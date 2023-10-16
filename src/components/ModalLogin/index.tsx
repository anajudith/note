import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { InputLogin } from "../../components";
import { IProps } from "./ModalLogin.structure";

export default function ModalLogin({ isOpen = false, handleClose }: IProps) {
  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.singin(email, password);
      if (isLogged) {
        navigate("/private");
        if (handleClose) {
          handleClose();
        }
      } else {
        alert("Não deu certo");
      }
    }
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 `}
    >
      <div className="bg-white p-8 rounded-lg grid gap-6 w-[30%]">
        <h1 className="text-center text-slate-600">Login</h1>
        <div className="gap-6 grid">
          <InputLogin
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          <InputLogin
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="px-4 h-[140%] w-[35%] bg-roxo text-white rounded-md"
          >
            Logar
          </button>
          <button
            onClick={handleClose}
            className="px-4 h-[140%] w-[35%] bg-red-400 rounded-md"
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
