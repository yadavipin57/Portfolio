const Education = () => {
  return (
    <div id="education">
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 pt-4 sm:p-6 md:p-10 mt-2 text-[#303030] ">
        <div>
          <h2 className="text-[#303030] text-3xl font-bold underline">
            Education
          </h2>
        </div>

        {/* Larger Device */}
        <div className="hidden py-8 md:flex flex-col gap-10">
          <div className="flex items-center gap-12">
            <div className="w-64">
              <img className="w-64 h-30 " src="./IGNOU.png" alt="" />
            </div>
            <div className="text-[rgb(48,48,48)]">
              <p className="font-bold text-2xl">
                Bachelor of Science (General)
              </p>
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
              <p className="font-bold text-2xl">
                Bachelor of Science in Aircraft Maintenance Engineering
              </p>
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

        {/* Medium Device */}
        <div className="hidden py-4 sm:flex md:hidden flex-col gap-4">
          <div className="flex items-center gap-6">
            <div className=" w-24">
              <img className="w-24 h-12 " src="./IGNOU.png" alt="" />
            </div>
            <div className="text-[#303030]">
              <p className="font-bold text-md">Bachelor of Science General</p>
              <div className="flex items-center gap-2 text-sm">
                <p>70%</p>
                <p>|</p>
                <p>July 2022 - June 2025</p>
              </div>
            </div>
          </div>

          <div className="  flex items-center gap-6">
            <div className=" w-24">
              <img className="w-24 h-12 " src="./SU.jpg" alt="" />
            </div>
            <div className="text-[#303030]">
              <p className="font-bold text-md">
                Bachelor of Science in Aircraft Maintenance Engineering
              </p>
              <div className="flex items-center gap-2 text-sm">
                <p>8.58 CGPA</p>
                <p>|</p>
                <p>Aug 2019 - Dec 2022</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className=" w-24">
              <img className="w-24 h-12 " src="./KVS.jpg" alt="" />
            </div>
            <div className="text-[#303030]">
              <p className="font-bold text-md">Higher Secondary</p>
              <div className="flex items-center gap-2 text-sm">
                <p>69.4%</p>
                <p>|</p>
                <p>April 2018 - March 2019</p>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Device */}
        <div className=" py-4 flex sm:hidden flex-col gap-4">
          <div className="flex items-center gap-6">
            <div className=" w-16">
              <img className="w-16 h-8 " src="./IGNOU.png" alt="" />
            </div>
            <div className="text-[#303030]">
              <p className="font-bold text-[12px]">
                Bachelor of Science General
              </p>
              <div className="flex items-center gap-2 text-[10px]">
                <p>70%</p>
                <p>|</p>
                <p>July 2022 - June 2025</p>
              </div>
            </div>
          </div>

          <div className="  flex  items-center gap-6">
            <div className=" w-16">
              <img className="w-[100%] h-8 " src="./SU.jpg" alt="" />
            </div>
            <div className="text-[#303030]  ">
              <p className="font-bold text-[12px]">
                Bachelor of Science <br /> in Aircraft Maintenance Engineering
              </p>
              <div className="flex items-center gap-2 text-[10px]">
                <p>8.58 CGPA</p>
                <p>|</p>
                <p>Aug 2019 - Dec 2022</p>
              </div>
            </div>
            
          </div>

          <div className="flex  items-center  gap-6">
            <div className=" w-16">
              <img className="w-16 h-8 " src="./KVS.jpg" alt="" />
            </div>
            <div className="text-[#303030]">
              <p className="font-bold text-[12px]">Higher Secondary</p>
              <div className="flex items-center gap-2 text-[10px]">
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
