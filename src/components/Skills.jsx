const Skills = () => {
  return (
    <div id="skills">
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 pt-4 sm:p-6 md:p-10 mt-2 text-[#303030] ">
        <div>
          <h2 className="text-3xl font-bold underline">Skills</h2>
        </div>

        {/* SKILLS for Medium and Large devices */}
        <div className="hidden mt-10 px-5 sm:flex flex-wrap items-center justify-center gap-8">
          <img
            className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./HTML5.png"
            alt="HTML5"
            title="HTML5"
          />
          <img
            className="w-16 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./CSS3.png"
            alt="CSS3"
            title="CSS3"
          />
          <img
            className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./JavaScript.png"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./React.png"
            alt="React"
            title="React.js"
          />
          <img
            className="w-28 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./MySql.png"
            alt="MySQL"
            title="MySQL Database"
          />
          <img
            className="w-[240px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Redux.png"
            alt="Redux"
            title="Redux - State Management"
          />
          <img
            className="w-[400px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./TailwindCSS.png"
            alt="TailwindCSS"
            title="Tailwind CSS"
          />
          <img
            className="w-24 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Bootstrap.png"
            alt="Bootstrap"
            title="Bootstrap Framework"
          />
          <img
            className="w-[250px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Firebase.png"
            alt="Firebase"
            title="Firebase - Backend as a Service"
          />
          <img
            className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Github.png"
            alt="GitHub"
            title="GitHub - Version Control Hosting"
          />
          <img
            className="w-[150px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Git.png"
            alt="Git"
            title="Git - Version Control System"
          />
          <img
            className="w-[150px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Npm.png"
            alt="NPM"
            title="NPM - Node Package Manager"
          />
        </div>

        {/* SKILLS for Small devices */}
        <div className="mt-4 px-1 sm:hidden flex flex-wrap items-center justify-center gap-8">
          <img
            className="w-10 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./HTML5.png"
            alt="HTML5"
            title="HTML5"
          />
          <img
            className="w-8 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./CSS3.png"
            alt="CSS3"
            title="CSS3"
          />
          <img
            className="w-10 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./JavaScript.png"
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            className="w-10 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./React.png"
            alt="React"
            title="React.js"
          />
          <img
            className="w-14 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./MySql.png"
            alt="MySQL"
            title="MySQL Database"
          />
          <img
            className="w-[100px] h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Redux.png"
            alt="Redux"
            title="Redux - State Management"
          />
          <img
            className="w-[200px] h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./TailwindCSS.png"
            alt="TailwindCSS"
            title="Tailwind CSS"
          />
          <img
            className="w-12 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Bootstrap.png"
            alt="Bootstrap"
            title="Bootstrap Framework"
          />
          <img
            className="w-[120px] h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Firebase.png"
            alt="Firebase"
            title="Firebase - Backend as a Service"
          />
          <img
            className="w-10 h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Github.png"
            alt="GitHub"
            title="GitHub - Version Control Hosting"
          />
          <img
            className="w-[75px] h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Git.png"
            alt="Git"
            title="Git - Version Control System"
          />
          <img
            className="w-[75px] h-[50px] cursor-pointer hover:border-b-2 border-[#E1451D] hover:transform hover:translate-y-[-5px] hover:shadow-2xl transition-all duration-300"
            src="./Npm.png"
            alt="NPM"
            title="NPM - Node Package Manager"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
