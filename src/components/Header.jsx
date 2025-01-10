const Header = () => {
  return (
    <div className="px-20 py-6 border-b-2 shadow-lg hover:shadow-2xl bg-[#303030] flex items-center justify-between" id="home">
      <div>
        <h1 className="cursor-pointer text-5xl font-bold"><span className="text-[#E1451D]">Vipin</span> Yadav</h1>
      </div>
      <div>
        <ul className="text-xl flex items-center justify-evenly gap-4 ">
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

export default Header;

// orange color E1451D
