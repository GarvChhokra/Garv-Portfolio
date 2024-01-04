import React from "react";
import { SlBadge } from "react-icons/sl";
import { HiBookOpen } from "react-icons/hi2";
import { skills } from "./skills";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div id="About">
      <Head>
        <title>About Garv Chhokra</title>
        <meta name="description" content="Learn more about me" />
      </Head>
      <div className="bg-gray-100 p-4 md:p-8 lg:p-12 text-center">
        <p className="text-gray-500 text-sm md:text-base">Get to know more</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-2 tracking-wide">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center mt-10">
          <img
            src="DSC02951.JPG"
            alt="Garv Chhokra"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-10"
          />
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center md:flex-1">
              <SlBadge className="text-4xl mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <p className="text-gray-700 text-sm md:text-base">
                1 year of professional IT experience. Worked on diverse
                projects, gaining expertise in various technologies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md mt-4 md:mt-0 text-center md:flex-1">
              <HiBookOpen className="text-4xl mb-4 text-blue-500" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Student at Centennial College pursuing Software Engineering
                Technology with a major in Artificial Intelligence.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-gray-700 text-sm md:text-base">
            I am a dedicated and passionate software engineer with a strong
            foundation in artificial intelligence and machine learning. Known
            for my problem-solving skills and ability to work collaboratively in
            a team environment, I bring a proactive and innovative approach to
            every project. Constantly learning and adapting to new technologies,
            I am enthusiastic about contributing to impactful and cutting-edge
            solutions.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="m-2 p-2 bg-gray-200 rounded-full">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
