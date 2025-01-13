import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleMenuOpen = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div
      className="px-4 py-2 sm:px-10 md:px-10 sm:py-6 border-b-2 shadow-lg hover:shadow-2xl bg-[#303030] flex items-center justify-between"
      id="home"
    >
      <div className="">
        <h1 className="cursor-pointer text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-[#E1451D]">Vipin</span> Yadav
        </h1>
      </div>
      {/* Menu icons for smaller screens */}
      <div
        className="sm:hidden absolute z-10  right-2 w-fit bg-[#303030] rounded-sm"
        onClick={handleMenuOpen}
      >
        <div className={`${isHidden ? "block" : "hidden"} cursor-pointer`}>
          <MenuRoundedIcon />
        </div>
      </div>
      {/* Navigation links */}
      <div
        className={`${
          isHidden ? "translate-x-full" : "translate-x-0"
        } sm:translate-x-0 fixed z-10  sm:static top-0 right-0 h-full sm:h-auto w-1/2 sm:w-auto max-w-[250px] sm:max-w-none bg-[#303030] sm:bg-transparent transition-transform duration-300 ease-in-out`}
      >
        <div
          className="sm:hidden absolute top-3 right-2 w-fit"
          onClick={handleMenuOpen}
        >
          <div className={`${isHidden ? "hidden" : "block"} cursor-pointer`}>
            <CloseRoundedIcon />
          </div>
        </div>
        <ul className="mt-10 sm:mt-auto ml-4 sm:ml-auto flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:gap-2 text-md md:text-xl gap-4 sm:p-0 md:p-6">
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#skills">Skills</a>
          </li>
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#education">Education</a>
          </li>
          <li className="sm:px-1 md:px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
