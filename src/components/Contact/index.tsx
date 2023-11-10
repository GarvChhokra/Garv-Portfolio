import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 text-center">
      <p className="text-gray-500 text-sm md:text-base">Get in Touch</p>
      <h2 className="text-2xl md:text-5xl font-bold mb-4 mt-2 tracking-wide">
        Contact Me
      </h2>
      <div className="flex items-center justify-center mt-10 text-xl">
        <div className="flex items-center justify-center border border-gray-400 rounded-2xl w-1/3 p-5 mx-auto">
          <a
            className="flex px-5"
            href="mailto:garvchhokra@gmail.com"
            target="_blank"
          >
            <AiOutlineMail className="mt-1 mx-2 rounded-full" />
            garvchhokra@gmail.com
          </a>
          <a
            className="flex ml-10"
            href="https://www.linkedin.com/in/garvchhokra/"
            target="_blank"
          >
            <AiFillLinkedin className="mt-1 mx-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
