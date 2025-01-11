import { useRef } from "react";
import { toast } from "react-toastify";

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
    <div className="bg-[#303030]" id="contact">
      <div className="mx-auto sm:w-[90%] md:w-[80%] px-2 pt-4 sm:p-6 md:p-10 mt-10 text-white pb-10">
        <div>
          <h2 className="text-[#E1451D] text-3xl font-bold underline">
            Contact
          </h2>
        </div>

        <div className="my-8 flex items-center flex-wrap justify-between gap-4">
          <div className="mx-auto w-[260px] px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex justify-center items-center gap-2">
            <img
              className="w-12 h-10 rounded-full"
              src="./Whatsapp.webp"
              alt=""
            />
            <p
              className="text-lg cursor-pointer"
              title="Copy"
              onClick={handleCopy}
              ref={copyRef}
            >
              +91 98920 88121
            </p>
          </div>

          <div className="mx-auto  w-[260px] px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex justify-center items-center gap-2">
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

          <div className="mx-auto  w-[260px] px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex justify-center items-center gap-2">
            <img className="w-10 h-10" src="./Linkedin.png" alt="" />
            <p className="text-lg" title="Click to go to Linkedin">
              <a href="https://www.linkedin.com/in/yadavipin57" target="_blank">
                @yadavipin57/
              </a>
            </p>
          </div>

          <div className="mx-auto  w-[260px] px-2 py-1 rounded-lg text-[#303030] bg-[#fff] flex justify-center items-center gap-2">
            <img className="w-10 h-10" src="./Github.png" alt="" />
            <p className="text-lg" title="Click to go to Github">
              <a href="https://github.com/yadavipin57" target="_blank">
                @yadavipin57
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
