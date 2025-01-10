const Education = () => {
  return (
    <div id="education">
      <div className="mx-auto w-[80%] p-10 mt-10" >
      <div>
        <h2 className="text-[#303030] text-3xl font-bold underline">
          Education
        </h2>
      </div>
      <div className="py-8 flex flex-col gap-10">

      <div className="flex items-center gap-12">
          <div className="w-64">
            <img className="w-64 h-30 " src="./IGNOU.png" alt="" />
          </div>
          <div className="text-[rgb(48,48,48)]">
            <p className="font-bold text-2xl">Bachelor of Science (General)</p>
            <div className="flex items-center gap-2 text-lg">
                <p>70%</p>
                <p>|</p>
                <p>July 2022 - June 2025</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="w-64">
            <img className="w-64 h-30 " src="./SU.jpg" alt="" />
          </div>
          <div className="text-[#303030]">
            <p className="font-bold text-2xl">Bachelor of Science in Aircraft Maintenance Engineering</p>
            <div className="flex items-center gap-2 text-lg">
                <p>8.58 CGPA</p>
                <p>|</p>
                <p>Aug 2019 - Dec 2022</p>
            </div>
          </div>
        </div>

        <div className=" flex items-center gap-12">
          <div className="w-64">
            <img className="w-64 h-36 " src="./KVS.jpg" alt="" />
          </div>
          <div className="text-[#303030] ">
            <p className="font-bold text-2xl">Higher Secondary</p>
            <div className="flex items-center gap-2 text-lg">
                <p>69.4%</p>
                <p>|</p>
                <p>April 2018 - March 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;
