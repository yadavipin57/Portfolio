const Footer = () => {
  return (
    <div className="p-2 sm:p-4 md:p-10 flex items-center justify-between border-t-[1px] border-gray-400 text-white bg-[#303030]">
      <div className="flex items-baseline">
        <p className="text-[10px] sm:text-sm md:text-lg">Created by &nbsp;</p>
        <h2 className="text-xl md:text-3xl font-bold">
          <span className="text-[#E1452D]">Vipin</span> Yadav
        </h2>
      </div>
      <div>
        <ul className="text-sm sm:text-lg md:text-xl flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-4 ">
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#home">Home</a>
          </li>
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#skills">Skills</a>
          </li>
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#education">Education</a>
          </li>
          <li className="px-2 py-1 cursor-pointer rounded-lg hover:text-[#E1451D] hover:underline">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
