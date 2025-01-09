import { useRef } from "react";
import toast from "react-toastify";

const Contact = () => {
  const copyRef = useRef();

  const handleCopy = () => {
    const textCopy = event.target.textContent;
    navigator.clipboard
      .writeText(textCopy)
      .then(() => {
        toast.success("Copied");
      })
      .catch((error) => {
        toast.error(`Not copied: ${error}`);
      });
  };

  return (
    <div className="p-10 mt-10 text-white bg-[#303030]">
      <div id="projects">
        <h2 className="text-[#E1451D] text-3xl font-bold underline">Contact</h2>
      </div>

      <div className="my-8 px-32 flex items-center flex-wrap justify-between">
        <div className="px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex items-center gap-2">
          <img className="w-12 h-10 rounded-full" src="./Phone.png" alt="" />
          <p
            className="text-lg cursor-pointer"
            title="Copy"
            onClick={handleCopy}
            ref={copyRef}
          >
            +91 98920 88121
          </p>
        </div>

        <div className="px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex items-center gap-2">
          <img className="w-10 h-10" src="./Gmail.png" alt="" />
          <p
            className="text-lg cursor-pointer"
            title="Copy"
            onClick={handleCopy}
            ref={copyRef}
          >
            yadavipin57@gmail.com
          </p>
        </div>

        <div className="px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex items-center gap-2">
          <img className="w-10 h-10" src="./Linkedin.png" alt="" />
          <p className="text-lg">
            <a href="https://www.linkedin.com/in/yadavipin57" target="_blank">
              @yadavipin57/
            </a>
          </p>
        </div>

        <div className="px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex items-center gap-2">
          <img className="w-10 h-10" src="./Github.png" alt="" />
          <p className="text-lg">
            <a href="https://github.com/yadavipin57" target="_blank">
              @yadavipin57
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
