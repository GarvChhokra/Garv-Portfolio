import Link from "next/link";
import React from "react";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="Contact">
    <div className="bg-gray-100 p-4 md:p-8 lg:p-12 text-center">
      <p className="text-gray-500 text-sm md:text-base">Get in Touch</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-2 tracking-wide">
        Contact Me
      </h2>
      <p>Tel: <Link href="tel:4379913320">4379913320</Link></p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 text-xl">
        <div className="flex flex-col items-center mb-6 md:mb-0 md:border border-gray-400 rounded-2xl p-5">
          <Link
            className="flex items-center hover:underline"
            href="mailto:garvchhokra@gmail.com"
            target="_blank"
          >
            <AiOutlineMail className="mr-2" />
            garvchhokra@gmail.com
          </Link>
        </div>
        <div className="flex flex-col items-center md:border-t md:border-b border-gray-400 md:mx-4 py-4">
          <Link
            className="flex items-center hover:underline"
            href="https://www.linkedin.com/in/garvchhokra/"
            target="_blank"
          >
            <AiFillLinkedin className="mr-2" />
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
