const Projects = () => {
  return (
    <div className="bg-[#303030]" id="projects">
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 pt-4 sm:p-6 md:p-10 mt-10 text-white ">
        <div>
          <h2 className="text-[#E1451D] text-3xl font-bold underline">
            Projects
          </h2>
        </div>
        <div className=" px-4 sm:px-8 md:px-16 py-8 text-white flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-8 items-center justify-between flex-wrap">
          {/* PROJECT 1 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://balloonburstgame.netlify.app"
                  target="_blank"
                >
                  Balloon Burst Game
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A Balloon Burst 2D game created using Canva and Javascript.
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://netflixgpt-747.web.app/"
                  target="_blank"
                >
                  NetflixGPT
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A movie recommendation web app using the OpenAI and TMDB API.
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://reactchat147.web.app/"
                  target="_blank"
                >
                  React Chat App
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A chat web application created using React.js, Firebase Authentication, Firestore and Database. 
              </p>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="#"
                  target="_blank"
                >
                  Employee Management System
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A Employee Management System created using React.js, MySQL, Express and Node.js.
              </p>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/search-github-profile/"
                  target="_blank"
                >
                  GitHub Profile Info
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                Live GitHub profile information of users using username.
              </p>
            </div>
          </div>

          {/* PROJECT 6 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/Weather/ "
                  target="_blank"
                >
                  Weather Web App
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                Live weather information of various cities around the world with a simple search.
              </p>
            </div>
          </div>

          {/* PROJECT 7 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/GymFitness/"
                  target="_blank"
                >
                  Gym Fitness Website
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A Gym website created using HTML5, CSS3 and Javascript with responsive interface.
              </p>
            </div>
          </div>

          {/* PROJECT 8 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/To-Do-List/"
                  target="_blank"
                >
                  ToDo List
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A ToDo List application to keep track of your activities.
              </p>
            </div>
          </div>

          {/* PROJECT 9 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/Quiz-Game/"
                  target="_blank"
                >
                  Quizz Game
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                A Quizz game to test your knowledge of the world.
              </p>
            </div>
          </div>

          {/* PROJECT 10 */}
          <div className="w-[80%] sm:w-[46%] h-[260px] text-black border-[2px] rounded-lg border-[#E1451D] cursor-pointer relative group">
            {/* Hoverable Content */}
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              {/* Visible on hover */}
              <h4 className="mx-auto w-full text-center text-white text-2xl font-bold group-hover:block" title="Visit site">
                <a
                  className="hover:underline"
                  href="https://yadavipin57.github.io/Amazon-Clone/"
                  target="_blank"
                >
                  Amazon Clone
                </a>
              </h4>
              {/* Initially hidden, visible on hover */}
              <p className="text-white hidden md:group-hover:block  text-justify">
                Amazon Clone landing page created using HTML5 and CSS3.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
