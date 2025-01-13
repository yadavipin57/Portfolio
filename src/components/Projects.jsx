import {
  projectNames,
  projectLink,
  projectDescription,
  projectPagesSRC,
} from "../utils/constants";

const Projects = () => {
  return (
    <div className="bg-[#303030]" id="projects">
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 pt-4 sm:p-6 md:p-10 mt-10 text-white ">
        <div>
          <h2 className="text-[#E1451D] text-3xl font-bold underline">
            Projects
          </h2>
        </div>
        <div className="py-8 text-white flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-8 items-center justify-center flex-wrap relative">

          {projectNames.map((projectName, index) => {
            return (
              <div
                className="mb-8 w-[280px] h-[132px] sm:w-[32vw] sm:h-[32vh] text-black rounded-lg shadow-2xl hover:shadow-3xl cursor-pointer relative group"
                key={projectName}
              >
                <div className="w-full h-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg group">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={`${projectPagesSRC[index]}.png`}
                    alt=""
                  />
                  <p  className="px-1 absolute inset-0 text-center hidden group-hover:flex items-center justify-center bg-black bg-opacity-80 text-white text-lg font-semibold"
                  >{projectDescription[index]}</p>
                  <h4
                    className="mt-2 mx-auto w-full text-center text-white text-lg bg-[#E1451D] rounded-lg sm:text-2xl font-bold "
                    title="Visit site"
                  >
                    <a
                      className="hover:underline"
                      href={projectLink[index]}
                      target="_blank"
                    >
                      {projectName}
                    </a>
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

{/* <div
  className="w-[80%] sm:w-[32vw] h-[32vh] text-black rounded-lg bg-[#E1451D] shadow-2xl hover:shadow-3xl cursor-pointer relative group"
  key={projectName}
>
  <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
    <img
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
      src={`${projectPagesSRC[index]}.png`}
      alt=""
    />
    <h4
      className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block"
      title="Visit site"
    >
      <a className="hover:underline" href={projectLink[index]} target="_blank">
        {projectName}
      </a>
    </h4>
    <p className="text-white hidden md:group-hover:block  text-justify">
      {projectDescription[index]}
    </p>
  </div>
</div>; */}
