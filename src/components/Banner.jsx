const Banner = () => {
  return (
    <div>
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 sm:px-6 md:px-10 text-[#303030] flex flex-wrap justify-between items-center">
        <div className="w-3/5">
          {/* <h1 className="text-4xl font-bold">THIS SITE IS UNDER CONSTRUCTION</h1> */}
          <h3 className="text-md sm:text-xl md:text-2xl font-bold">Hi,</h3>
          <h2 className="text-md md:text-2xl sm:text-4xl font-bold">
            I&apos;m <span className="text-[#E1451D]">Vipin</span> <br /> a
            Frontend Developer
          </h2>
          <p className="mt-2 sm:mt-4 text-[10px] sm:text-lg  font-bold ">
            Frontend Web Developer skilled in HTML, CSS, JavaScript, React, and
            Redux. Experienced in building dynamic web apps with Firebase and
            MySQL, focused on crafting user-friendly solutions.
          </p>
        </div>
        <div className="w-2/5 ">
          <img className="rounded-full" src="./vipin.jfif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
