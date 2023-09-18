import { IProps } from "./InputLogin.structure";

export default function InputLogin({
  type,
  onChange,
  value,
  placeholder,
}: IProps) {
  return (
    <>
      <form className="space-y-6">
        <div>
          <label
            htmlFor={type === "email" ? "email" : "password"}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {type === "email" ? "Email" : "Senha"}
          </label>
          <div className="mt-2">
            <input
              type={type}
              onChange={onChange}
              value={value}
              autoComplete={type === "email" ? "email" : "current-password"}
              required
              placeholder={placeholder}
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </form>
    </>
  );
}
