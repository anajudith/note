import Logo from "../../images/Logo.svg";
import Button from "../Button";

export default function Header() {
  return (
    <header className="text-black flex items-center justify-center h-[200px] relative">
      <img src={Logo} />

      <form className="absolute h-[84px] -bottom-[40px] w-[100%] max-w-[736px] flex gap-[8px] py-[16px]">
        <input
          className="h-full flex-1 text-black bg-gray-800 border border-gray-900 rounded-lg p-4 text-base "
          placeholder="Add new Annotation"
          type="text"
        />
        <Button />
      </form>
    </header>
  );
}
