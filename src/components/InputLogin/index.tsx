import { IProps } from "./InputLogin.structure";

export default function InputLogin({
  type,
  onChange,
  value,
  placeholder,
  hasError = false,
  errorMessage = "inválido",
}: IProps) {
  return (
    <>
      <form className={`w-full  ${hasError && "border-red-600"}`}>
        <div>
          <label
            htmlFor={type === "email" ? "email" : "password"}
            className="text-sm font-medium leading-6 text-slate-600 justify-start flex"
          >
            {type === "email" ? "Email" : "Senha"}
          </label>
          <div className="">
            <input
              type={type}
              onChange={onChange}
              value={value}
              autoComplete={type === "email" ? "email" : "current-password"}
              required
              placeholder={placeholder}
              className="p-2 w-full rounded-md border-0  text-slate-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {hasError && (
              <span className="text-slate-950 text-sm">{errorMessage}</span>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
