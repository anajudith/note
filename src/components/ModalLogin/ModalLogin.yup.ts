import * as Yup from "yup";

export type FormValues = {
  email: string;
  password: string;
};

export const schema = Yup.object({
  email: Yup.string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Digite um endereço de e-mail válido"
    )
    .required("Preencha o campo "),
  password: Yup.string().required("Digite a senha"),
});
