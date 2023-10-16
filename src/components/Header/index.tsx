import React from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import ModalLogin from "../ModalLogin";
import TitleHeader from "../TitleHeader";
import logo from "./logoHeader.png";
import { Link } from "react-router-dom";
// FaArrowRightFromBracket
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  const auth = React.useContext(AuthContext);

  const handleLogout = async () => {
    await auth.singout();
    window.location.href = "/";
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const openModalLogin = () => {
    setIsOpen(true);
  };

  const closeModalLogin = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <header className="px-20 w-full h-[60px] bg-gray-950 bg-slate-950 text-white">
        <div className="flex justify-between text-center items-center w-full h-full">
          <div className="w-[100px]">
            <TitleHeader
              title="Home"
              link="/"
              iconBefore={<HiOutlineHome color="black" size={20} />}
            />
          </div>
          {auth.user ? (
            <Link className="" to="/private">
              <img className="h-[64px]" src={logo} alt="logo" />
            </Link>
          ) : (
            <>
              <img className="h-[64px]" src={logo} alt="logo" />{" "}
              <div className="w-[100px]">
                <TitleHeader
                  title="Login"
                  onClick={openModalLogin}
                  iconAfter={<FiLogIn />}
                />
              </div>
            </>
          )}
          {auth.user && (
            <div className="w-[100px]">
              <TitleHeader
                title="Sair"
                onClick={handleLogout}
                iconAfter={<FaArrowRightFromBracket />}
              />
            </div>
          )}
        </div>
        <div className="w-[10%] ">{/* Seu ícone aqui */}</div>
        <ModalLogin isOpen={isOpen} handleClose={closeModalLogin} />
      </header>
    </div>
  );
}
