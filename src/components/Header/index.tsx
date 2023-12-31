import React from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import ModalLogin from "../ModalLogin";
import TitleHeader from "../TitleHeader";
import logo from "../../assets/images/logoHeader.png";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
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

  // posso fazer a condição de autenticação no componente titleHeader mesmo.

  return (
    <div>
      <header className="px-20 w-full h-[60px] bg-gray-950 bg-slate-950 text-white">
        <div className="flex justify-between text-center items-center w-full h-full">
          {auth.user && (
            <div className="w-[165px]">
              <TitleHeader
                title="Criar anotação"
                link="/private"
                iconBefore={<FaPencilAlt color="black" size={20} />}
              />
            </div>
          )}
          {auth.user ? (
            <Link className="" to="/">
              <img className="h-[64px]" src={logo} alt="logo" />
            </Link>
          ) : (
            <>
              <img className="h-[64px]" src={logo} alt="logo" />
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

        <div className="fixed">
          <ModalLogin isOpen={isOpen} handleClose={closeModalLogin} />
        </div>
      </header>
    </div>
  );
}
