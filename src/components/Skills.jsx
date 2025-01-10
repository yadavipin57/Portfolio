const Skills = () => {
  return (
   <div id="skills">
     <div className="mx-auto w-[80%] p-10 mt-10 text-[#303030] " >
      <div >
        <h2 className="text-3xl font-bold underline">Skills</h2>
      </div>
      <div className="mt-10 px-5 flex flex-wrap items-center justify-center gap-8">
        <img
          className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./HTML5.png"
          alt="HTML5"
          title="HTML5"
        />
        <img
          className="w-16 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./CSS3.png"
          alt="CSS3"
          title="CSS3"
        />
        <img
          className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./JavaScript.png"
          alt="JavaScript"
          title="JavaScript"
        />
        <img
          className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./React.png"
          alt="React"
          title="React.js"
        />
        <img
          className="w-28 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./MySql.png"
          alt="MySQL"
          title="MySQL Database"
        />
        <img
          className="w-[240px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./Redux.png"
          alt="Redux"
          title="Redux - State Management"
        />
        <img
          className="w-[400px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./TailwindCSS.png"
          alt="TailwindCSS"
          title="Tailwind CSS"
        />
        <img
          className="w-24 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./Bootstrap.png"
          alt="Bootstrap"
          title="Bootstrap Framework"
        />
        <img
          className="w-[250px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./Firebase.png"
          alt="Firebase"
          title="Firebase - Backend as a Service"
        />
        <img
          className="w-20 h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./Github.png"
          alt="GitHub"
          title="GitHub - Version Control Hosting"
        />
        <img
          className="w-[150px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
          src="./Git.png"
          alt="Git"
          title="Git - Version Control System"
        />
        <img
          className="w-[150px] h-[100px] cursor-pointer hover:border-b-2 border-[#E1451D]"
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
