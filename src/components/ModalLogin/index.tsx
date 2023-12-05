import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";
import { InputLogin } from "../../components";
import { IProps } from "./ModalLogin.structure";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues, schema } from "./ModalLogin.yup";

export default function ModalLogin({ isOpen = false, handleClose }: IProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const auth = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (data: FormValues) => {
    try {
      const isLogged = await auth.singin(data.email, data.password);
      if (isLogged) {
        navigate("/private");
        if (handleClose) {
          handleClose();
        }
      } else {
        alert("Não deu certo");
      }
    } catch (error) {
      console.error("Error while logging in", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className={`${
        isOpen ? "block " : "hidden"
      } fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 `}
    >
      <div className="bg-white p-8 rounded-lg grid gap-6 w-[30%]">
        <h1 className="text-center text-slate-600">Login</h1>
        <div className="gap-6 grid">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLogin
                value={value}
                type="email"
                onChange={onChange}
                placeholder="Digite seu e-mail"
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputLogin
                value={value}
                type="password"
                onChange={onChange}
                placeholder="Digite sua senha"
                hasError={!!errors.password}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 h-[140%] w-[35%] bg-roxo text-white rounded-md"
          >
            Logar
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="px-4 h-[140%] w-[35%] bg-red-400 rounded-md"
          >
            Sair
          </button>
        </div>
      </div>
    </form>
  );
}
