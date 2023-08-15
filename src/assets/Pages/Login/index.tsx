import React from "react";
import { InputLogin } from "../../components";

export default function Login() {
  return (
    <>
      <div className="w-[500px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <InputLogin type="email" />
        <InputLogin type="senha" />
        <div>
          <button
            type="submit"
            className="flex mt-[20px] w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}
