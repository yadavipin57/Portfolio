const Banner = () => {
  return (
    <div>
      <div className="mx-auto w-[80%] px-10 text-[#303030] flex flex-wrap justify-between items-center">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold">THIS SITE IS UNDER CONSTRUCTION</h1>
          <h3 className="text-2xl font-bold">Hi,</h3>
          <h2 className="text-4xl font-bold">
            I&apos;m <span className="text-[#E1451D]">Vipin</span> <br /> a
            Frontend Developer
          </h2>
          <p className="mt-2 sm:mt-4 font-bold ">
            Frontend Web Developer with expertise in HTML, CSS, JavaScript, and
            frameworks like React and Redux. Proficient in building dynamic,
            user-friendly web applications with hands-on experience in Firebase
            and MySQL. Passionate about creating innovative solutions in
            collaborative environments.
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
