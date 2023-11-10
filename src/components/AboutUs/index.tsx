import React from "react";

const AboutUs = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 text-center">
      <p className="text-gray-500 text-sm md:text-base">Get to know more</p>
      <h2 className="text-2xl md:text-5xl font-bold mb-4 mt-2 tracking-wide">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <img
          src="DSC02951.JPG"
          alt="Garv Chhokra"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
        />
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-20">
          <div className="bg-white p-4 rounded-lg shadow-md md:flex-1">
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, sint eligendi maiores nam perferendis odit ducimus
              repellat non sunt amet ipsa, expedita, voluptate sit. Nam officia
              harum dolore a rem?
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md md:flex-1 mt-4 md:mt-0">
            <p className="text-gray-700 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, sint eligendi maiores nam perferendis odit ducimus
              repellat non sunt amet ipsa, expedita, voluptate sit. Nam officia
              harum dolore a rem?
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm md:text-base ml-0 md:ml-6 mt-4 md:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          sint eligendi maiores nam perferendis odit ducimus repellat non sunt
          amet ipsa, expedita, voluptate sit. Nam officia harum dolore a rem?
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
